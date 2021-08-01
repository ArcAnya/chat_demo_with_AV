const WebSocket = require('ws')
const wsServer = new WebSocket.Server({ port: 8080 })

wsServer.on('connection', connection => {
    connection.send('<h2>Live Long and Prosper!</h2>')
    connection.on('message', message => {
        message = JSON.parse(message)
        console.table(message)
        wsServer.clients.forEach(client => {
            client.send(JSON.stringify(message))
        })
    })
})

// Note: check out in dev tools 
// Console: enter const connection = new WebSocket('ws://localhost:8080')
// then connection.send('Hello Server!')
// check in Network => click on localhost
// see the Messages...