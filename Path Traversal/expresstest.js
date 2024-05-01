const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const file = readFile(req.query.name).toString()   
  resp.render()
})


function readFile(path){

    result = fs.readFileSync(path)
    return result;
  
  }



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
