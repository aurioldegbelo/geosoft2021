const express = require('express')
const path = require('path')

const app = express()
const port = 3000


// rendering static files, e.g. brandenburg_gate
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})

