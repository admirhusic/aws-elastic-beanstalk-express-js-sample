const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => res.send("We love AWS!"))

app.get("/demo", (req, res) => res.send("This is a demo endpoint"))

app.listen(port)
console.log(`App running on http://localhost:${port}`)
