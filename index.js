const express = require('express')
const app = express() // Hàm chính của thư viện và trả về một object
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/in4', (req,res) => res.send('Xin Chào Khánh Hòa'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
