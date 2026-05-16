const express = require("express")
const path = require("path")
const jsonServer = require("json-server")

const app = express()

const PORT = process.env.PORT || 3333

const router = jsonServer.router("server.json")
const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use(express.json())

app.use("/api", router)

app.use(express.static(path.join(__dirname, "dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})