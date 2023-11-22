const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "template/index.html"))
})

app.post('/merge', upload.array('pdfs',2), function (req, res, next) {
    
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})