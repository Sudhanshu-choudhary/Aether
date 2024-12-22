import dotenv from 'dotenv'
import authApp from './authApp.js'
import log from '../../shared/utils/log.js'
import connectDB from '../../shared/db/connectDB.js'

dotenv.config({ path: './.env'})

connectDB(process.env.AUTH_MONGO_URI)
.then(() => {
    authApp.listen(process.env.AUTH_PORT || 2000, () => {
        log.info(`🚀 AUTH SERVICE Running on ${process.env.AUTH_PORT}`)
    })
})
.catch((err) => {
    log.error("Connection failure", err)
    process.exit(1)
})