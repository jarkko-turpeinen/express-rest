require('dotenv/config')

const service = () => {
    let calls = 0
    const start = new Date()
    const os = require('os')
    const interfaces = os.networkInterfaces()
    let ip
    for (let k in interfaces) {
        for (let k2 in interfaces[k]) {
            let address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                ip = address.address
            }
        }
    }    
    return () => {
        return {
            ip: ip,
            start: start, 
            calls: ++calls
        }
    }
}    
global.service = service()

const express = require('express')
const app = express()

app.use('/', require('./routes'))
app.on('error', (error) => console.error(error))
app.listen(process.env.server_port)