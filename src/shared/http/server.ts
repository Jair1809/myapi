import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppErrors'

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }
    console.log(error)
    return response.status(500).json({
      status: 'error',
      message: 'Internal server Error',
    })
  },
) //implementação do middle

app.listen(process.env.PORT, () => {
  console.log(`O SERVER ESTÁ ATIVO EM ${process.env.PORT}`)
})
