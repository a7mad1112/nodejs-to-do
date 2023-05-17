import express from 'express'
import initApp from './src/index.route.js'
import { connectDB } from './DB/connection.js'
const app = express()
const port = 3000

initApp(app, express)
connectDB()
app.listen(port, () => console.log(`app listening on port ${port}!`)) 