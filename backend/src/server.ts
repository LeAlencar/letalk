import express, { Application } from 'express'
import cors from 'cors'
import { connectDB } from './database/database'
import LoanRouter from './modules/Loan/LoanRouter'


const app: Application = express()

app.use(express.json())
app.use(cors())



try {
  connectDB()
} catch(err) {
  console.error("Unable to connect to database")
}

app.use("/loans", LoanRouter)


app.listen(9000, () => {
  console.log("Server running on port 9000")
})
