import express from 'express'
import { ValidateRequestBody } from './utils/ValidaTeRequestBody';

const app = express();

app.use(express.json())

app.post("/", (req, res) => {
  const validate = new ValidateRequestBody([
    "username",
    "password"
  ], req)
  const result = validate.execute()

  if(result) {
    return res.send(result)
  }
  return res.send("tudo ok")
})

app.listen(3001, () => {
  console.log("Custom-package is running in http://localhost:3001")
})