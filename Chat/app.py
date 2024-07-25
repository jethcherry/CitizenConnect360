from flask import Flask, jsonify, request
from dotenv import load_dotenv
from models import agent_executor
import pyodbc
import os
import uuid

load_dotenv('.env')
app = Flask(__name__)

# Configurations
USERNAME = 'sa'
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Create a connection string using environment variables
connectionString = f"""
   DRIVER={{ODBC Driver 17 for SQL Server}};
   SERVER={os.getenv('SERVER')};
   DATABASE={os.getenv('DATABASE')};
   UID={USERNAME};
   PWD={os.getenv('PASSWORD')};
"""

def Dbquery(query, params=()):
    conn = pyodbc.connect(connectionString)
    cursor = conn.cursor()
    cursor.execute(query, params)
    columns = [column[0] for column in cursor.description]
    results = [dict(zip(columns, row)) for row in cursor.fetchall()]
    conn.close()
    return results

@app.route('/users', methods=['GET'])
def get_users():
    query = "SELECT * FROM Cnt360Users"
    try:
        data = Dbquery(query)
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
    query = "SELECT * FROM Cnt360Users WHERE UserId=?"
    try:
        data = Dbquery(query, (user_id,))
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/users/add-user', methods=['POST'])
def register_user():
    if not request.is_json:
        return jsonify({"error": "Invalid input, JSON required"}), 400

    data = request.get_json()
    name = data.get('Name')
    email = data.get('Email')
    password = data.get('Password')
    role = data.get('Role')

    user_id = str(uuid.uuid4())

    if not all([name, email, password, role]):
        return jsonify({"error": "Missing data"}), 400

    query = """
        INSERT INTO Cnt360Users (UserId, Name, Email, Password, Role) 
        VALUES (?, ?, ?, ?, ?)
    """

    try:
        conn = pyodbc.connect(connectionString)
        cursor = conn.cursor()
        cursor.execute(query, (user_id, name, email, password, role))
        conn.commit()
        conn.close()
        return jsonify({"message": "User created successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/educate-chat', methods=['GET', 'POST'])
def educate_chat():
    if not request.is_json:
        return jsonify({"error": "Invalid input, JSON required"}), 400

    data = request.get_json()
    educate_id = str(uuid.uuid4())
    user_id = data.get('userId')
    query = data.get('Query')

    if not all([user_id, query]):
        return jsonify({"error": "Missing query parameter"}), 400

    try:
        answer = agent_executor(query)
        answer_given = answer.get('output')

        insert_query = """
        INSERT INTO Educate  (EducateId, userId, Query, Response) 
        VALUES (?, ?, ?, ?)
        """

        conn = pyodbc.connect(connectionString)
        cursor = conn.cursor()
        cursor.execute(insert_query, (educate_id, user_id, query, answer_given))
        conn.commit()
        conn.close()

        return jsonify({"response": answer_given}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
