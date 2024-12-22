import express from 'express'
import authRoutes from './routes/auth.routes.js'

const authApp = express()

authApp.use(express.json())

// Authentication routes
authApp.use('/api/v1/auth', authRoutes)

export default authApp