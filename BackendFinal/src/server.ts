import express, { json } from 'express'
import cors from 'cors'
import authRoutes from './Routes/authRoutes'
import pollRoutes from './Routes/PollsRoutes'
import incidentRoutes from './Routes/IncidenceRoutes'
import viewRoutes from './Routes/ViewsRoutes'
import cron from 'node-cron'
import { run } from './EmailService'



const app = express()

app.use(json())
app.use(cors())

app.use('/auth',authRoutes)
app.use('/polls', pollRoutes);
app.use('/incidents', incidentRoutes);
app.use('/views', viewRoutes);

// cron.schedule('*/10 * * * *',async()=>{
//     await run()

// })



app.listen(5500, () => console.log('Server is running on port 5500'))