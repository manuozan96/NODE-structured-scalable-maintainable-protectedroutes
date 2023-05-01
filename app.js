require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const {dbConnect} = require('./config/mongo')
const router = require('./app/routes/users')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/', router)

dbConnect()
app.listen(PORT, () => {
    console.log('Listenning on port',PORT);
})