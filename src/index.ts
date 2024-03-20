import express from 'express'
import cors from 'cors'
import customerRoutes from './routes/customerRoutes'
import { myDataSource } from '../app-data-source'

myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch(err => {
    console.error('Error during Data Source initialization:', err)
  })

const app = express()
const PORT = process.env.PORT || 4000
app.use(cors()) 

app.use(express.json())

app.use(async (req: any, res: any, next: any) => {
  try {
    next()
    console.log(
      'Connection to the database has been established successfully 🚀🚀'
    )
  } catch (error) {
    console.error('Error connecting to the database:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.use(customerRoutes)

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
