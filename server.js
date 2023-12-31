const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const mergedPdfs = require('./merge')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "template/index.html"))
})

app.post('/merge', upload.array('pdfs',2), async (req, res, next) => {
    console.log(req.files)
    // await
    let name = await mergedPdfs.mergedPdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:3000/static/${name}.pdf`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})