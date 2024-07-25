// import nodemailer from 'nodemailer'
// import path from 'path'
// import dotenv from 'dotenv'
// import ejs from 'ejs'
// dotenv.config({path:path.resolve(__dirname,"../../.env")})

// // step 1 is to create a configuration object

// let config={
//     host:"smtp-gmail.com",
//     service:"gmail",
//     port:587,
//     auth:{
//         user:process.env.EMAIL,
//         pass:process.env.PASS
//     }
// }

// // step 2 create a transporter

// function createTransporter (config:any){
//     return nodemailer.createTransport(config)
// }

// //step 3 send Email
// async function sendEmail(messageOption:any) {
//     let transporter=createTransporter(config)
//     await transporter.verify()

//     await transporter.sendMail(messageOption,(err,info)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(info)
//     })
    
// }

// // let messageOption={
// //     to:process.env.EMAIL,
// //     from:process.env.EMAIL,
// //     cc:'',
// //     bcc:[],
// //     subject:"Testing",
// //     html:"<h1></h1>"
// // }

// const emailData = {
//     username: 'Jethro Cheruiyot',
//     governmentApprovalLink: 'http://example.com/approve-government',
//     citizenApprovalLink: 'http://example.com/approve-citizen',
//     currentYear: new Date().getFullYear(),
//     unsubscribeLink: 'http://example.com/unsubscribe'
// };



// ejs.renderFile('../../Templates/approve.ejs',emailData,(err,data)=>{

//     if(err){
//         console.error('Error rendering EJS template', err);
//         return;
//     }

//     let messageOption={
//         to:process.env.EMAIL,
//         from:process.env.EMAIL,
//         cc:'',
//         bcc:[],
//         subject:"Account Approval Required",
//         html:data
//     }
//     sendEmail(messageOption)

// })

