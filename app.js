const path = require('path')
const express = require('express')

const app = express()

const home = require('./routes/home')
const usersRoutes = require('./routes/users')


// Serve Static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', usersRoutes)
app.use(home)

app.listen(5000)