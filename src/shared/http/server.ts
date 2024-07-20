import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'ola dev' })
})

app.listen(process.env.PORT, () => {
  console.log(`O SERVER ESTÁ ATIVO EM ${process.env.PORT}`)
})
