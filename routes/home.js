const path = require('path')
const express = require('express')

const router = express.Router()

const rootDir = path.dirname(require.main.filename)

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})


module.exports = router;