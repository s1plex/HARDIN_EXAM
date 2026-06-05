import 'dotenv/config'
import { Pool } from 'pg'

// Подключение к бд
export const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME
})
