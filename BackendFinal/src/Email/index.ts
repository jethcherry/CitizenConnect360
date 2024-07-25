import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
import ejs from 'ejs'
dotenv.config({path:path.resolve(__dirname,"../../.env")})

// step 1 is to create a configuration object

let config={
    host:"smtp-gmail.com",
    service:"gmail",
    port:587,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
}

// step 2 create a transporter

function createTransporter (config:any){
    return nodemailer.createTransport(config)
}

//step 3 send Email
export async function sendEmail(messageOption:any) {
    let transporter=createTransporter(config)
    await transporter.verify()

    await transporter.sendMail(messageOption,(err,info)=>{
        if(err){
            console.log(err)
        }
        console.log(info)
    })
    
}

