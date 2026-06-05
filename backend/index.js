import cors from 'cors'
import 'dotenv/config'
import express, { json } from 'express'
import { initDatabase } from './db/init.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(json())

// Запуск сервера
const start = async () => {
	await initDatabase()

	try {
		app.listen(PORT, () => {
			console.log(`Сервер запущен на порту ${PORT}`)
		})
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

start()
