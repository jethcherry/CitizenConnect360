
import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../Config/config'
import { sendEmail } from '../Email';


export interface Users {
    UserId: string;
    Email: string;
    Name: string;
    Password: string;
    isDeleted: number;
    Role: string;
    isEmailSent: number;
    isApproved: boolean;
 }
 
export async function run() {
    try {
        let pool = await mssql.connect(sqlConfig) 
        let users = await(await pool.request().query('SELECT * FROM Connect360Users WHERE isEmailSent=0')).recordset  as Users[]
        console.log(users)
        users.forEach(user=>{
            //build a message option
            ejs.renderFile("Templates/approve.ejs",{name:user.Name} ,async(err,data)=>{
                console.log(data);
                let messageOption={
                    to:user.Email,
                    from:process.env.EMAIL,
                    subject:'Account Approval Required',
                    html:data
                }

                await sendEmail(messageOption)
                await pool.request().query(`UPDATE Connect360Users SET isEmailSent=1 WHERE  UserId='${user.UserId}'`)
            })
            //send an email
            //update

        })   
        
    } catch (error) {
        console.log(error)
        
    }
    
}