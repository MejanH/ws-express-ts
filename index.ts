import express from "express"
import { createServer } from "http"
import { WebSocketServer } from "ws"

const app = express()
const server = createServer(app)
const port = 8000

const wss = new WebSocketServer({ server })
wss.on("connection", (ws) => {
    ws.on("error", console.error)

    ws.on("message", (data) => {
        console.log('received: %s', data)
    })

    ws.send("something")
})

server.listen(port, "0.0.0.0")