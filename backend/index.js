import cors from 'cors'
import 'dotenv/config'
import express, { json } from 'express'
import { initDatabase } from './db/init.js'
// import adminRoutes from './modules/adminRoutes'
// import authRoutes from './modules/authRoutes'
// import bookingRoutes from './modules/bookingRoutes'

const app = express()
const PORT = process.env.PORT || 3000

/* Middleware */
app.use(cors())
app.use(json())

/* Маршруты API */
// app.use('/api/auth', authRoutes)
// app.use('/api/bookings', bookingRoutes)
// app.use('/api/admin', adminRoutes)

/* Запуск сервера после инициализации БД */
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
