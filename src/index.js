import express from "express";
const app = express()
const port = 3000
import url from "url"
const __dirname = url.fileURLToPath(new URL(".", import.meta.url))


app.get("/",(req,res) => {
    res.sendFile("../index.html", {root: __dirname})
})

app.listen(port, ()=> {
    console.log('listeing at http://localhost:3000')
})