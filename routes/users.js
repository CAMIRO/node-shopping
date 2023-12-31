const path = require('path')
const express = require('express')

const router = express.Router()

const rootDir = path.dirname(require.main.filename)

router.get('/users', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

module.exports = router