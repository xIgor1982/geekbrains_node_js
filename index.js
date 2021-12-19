const fs = require('fs')
const readLine = require('readline')

const readStream = fs.createReadStream('access.log', 'utf-8')
const writeStream1 = fs.createWriteStream('./89.123.1.42_request.log')
const writeStream2 = fs.createWriteStream('./34.48.240.111_request.log')

let numStr = 0
let numIp89 = 0
let numIp34 = 0

const rl = readLine.createInterface({
    input: readStream,
    terminal: true
})

rl.on('line', (line) => {
    if (line.includes('89.123.1.41')) {
        writeStream1.write(`${line}\n`)
        numIp89++
    }
    if (line.includes('34.48.240.11')) {
        writeStream2.write(`${line}\n`)
        numIp34++
    }
    numStr++

    console.log(`Всего прочтено строк: ${numStr}, из них 89.123.1.41: ${numIp89}, из них 34.48.240.11: ${numIp34}`)
})