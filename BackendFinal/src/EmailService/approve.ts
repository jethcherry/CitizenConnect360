// import mssql from 'mssql'
// import ejs from 'ejs'
// import { sqlConfig } from '../Config/config'
// import { sendEmail } from '../Email'

// export interface Users {
//     UserId: string;
//     Email: string;
//     Name: string;
//     Password: string;
//     isDeleted: number;
//     Role: string;
//     isEmailSent: number;
//     isApproved: boolean;
//     resetToken?: string; // Add if you are using reset tokens
// }

// export async function resetPassword() {
//     try {
//         let pool = await mssql.connect(sqlConfig)
        
//         // Fetch users who need password reset emails
//         let users = await pool.request().query('SELECT * FROM Connect360Users WHERE isApproved=0 ')
//         let usersList: Users[] = users.recordset as Users[]
//         console.log(usersList)
        
//         usersList.forEach(async user => {
//             // Build the reset link
//             const resetLink = `http://example.com/reset-password?token=${user.resetToken}`;
            
//             // Render the email content
//             ejs.renderFile("Templates/resetpassword.ejs", {
//                 name: user.Name,
//                 resetLink: resetLink,
//                 currentYear: new Date().getFullYear(),
//                 unsubscribeLink: 'http://example.com/unsubscribe'
//             }, async (err, data) => {
//                 if (err) {
//                     console.error('Error rendering EJS template', err);
//                     return;
//                 }
                
//                 // Build the message option
//                 let messageOption = {
//                     to: user.Email,
//                     from: process.env.EMAIL,
//                     subject: 'Password Reset Request',
//                     html: data
//                 }
                
//                 // Send the email
//                 await sendEmail(messageOption)
                
//                 // Update the database to mark email as sent
//                 await pool.request().query(`UPDATE Connect360Users SET isApproved=1 WHERE UserId='${user.UserId}'`)
//             })
//         })
        
//     } catch (error) {
//         console.error('Error sending password reset emails', error)
//     }
// }
