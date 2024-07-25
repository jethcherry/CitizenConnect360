import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DbHelper } from '../DatabaseHelpers/dbhelper';
import { RegisterShema } from '../Helpers/auth';
import { User, Payload } from '../Models/authModel';
import mssql from 'mssql';
import { sqlConfig } from '../Config/config';

const dbInstance = new DbHelper();

export const registerUser = async (req: Request, res: Response) => {
    console.log(req.body);

    try {
        const id = uid();
        const { Name, Email, Password, Role } = req.body;
        console.log(req.body);
        const { error } = RegisterShema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessage = error.details.map(d => d.message).join(', ');
            return res.status(400).json({ message: errorMessage });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        console.log(hashedPassword);

        await dbInstance.exec('addUser', {
            UserId: id,
            Name,
            Email,
            Password: hashedPassword,
            Role
        });

        return res.status(201).json({ message: 'User was added successfully!', UserId: id });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);

    try {
        const { Email, Password } = req.body;

        const userResult = await dbInstance.exec('getUser', { Email });
        const user: User[] = userResult.recordset as User[];
        console.log(user);
        console.log(req.body);

        if (user.length !== 0) {
            const isValid = await bcrypt.compare(Password, user[0].Password);

            if (isValid) {
                const payload: Payload = {
                    Sub: user[0].UserId,
                    Name: user[0].Name,
                    Email: user[0].Email,
                    isAdmin: user[0].isAdmin,
                    isApproved: user[0].isApproved,
                    Role: user[0].Role
                };
                const role = user[0].Role;
                const token = jwt.sign(payload, process.env.SECRET as string, { expiresIn: '2h' });
                return res.status(200).json({ isSuccess: true, message: 'Login Success', token, role });
            }
            console.log(isValid);
        }

        return res.status(400).json({ isSuccess: false, message: 'Invalid Credentials' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};



export const AdminLogin = async (req: Request, res: Response) => {
    try {
        const { Email, Password } = req.body;
        let pool = await mssql.connect(sqlConfig);
        let user = (await pool.request()
            .input("Email", Email)
            .execute('getUser')).recordset as User[];

        const isValid = await bcrypt.compare(Password, user[0].Password);

        if (Email === process.env.ADMINEMAIL && isValid) {
            const payload: Payload = {
                Sub: user[0].UserId,
                Name: user[0].Name,
                Email: user[0].Email,
                isAdmin: user[0].isAdmin,
                isApproved: user[0].isApproved,
                Role: user[0].Role
            };
            const token = jwt.sign(payload, process.env.SECRET as string, { expiresIn: '2h' });
            return res.status(200).json({ message: "Admin Login Success", token });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = (await dbInstance.exec('getUsers', {})).recordset as User[];
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.UserId;
        const { Name, Email, Password, Role } = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10);

        await dbInstance.exec('updateUser', {
            UserId: id,
            Name,
            Email,
            Password: hashedPassword,
            Role
        });

        return res.status(200).json({ message: 'User was updated successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.UserId;
        const payload: Payload = req.body.payload;

        if (!payload || !payload.isAdmin) {
            return res.status(403).json({ message: 'Only admins can delete users.' });
        }

        await dbInstance.exec('deleteUser', { UserId: id });

        return res.status(200).json({ message: 'User was deleted successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};
