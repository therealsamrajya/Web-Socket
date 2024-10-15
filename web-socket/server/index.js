import {WebSocketServer} from "ws";

const server = new WebSocketServer({ port: 4000 })

server.on("connection",socket=>{
    socket.on('message',message=>{
        const b = Buffer.from(message)
        console.log(b.toString());
        
        
        socket.send(`${message}`)
    })
})