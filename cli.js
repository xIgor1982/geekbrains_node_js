#!/usr/bin/env node

// const fs = require('fs')
// const yargs = require('yargs')
// const path = require('path')
// const readLine = require('readline')

// const options = yargs
//     .usage('Usage: -p <path>')
//     .option('p', {
//         alias: 'path',
//         describe: 'Path to file',
//         type: 'string',
//         demandOption: true
//     })
//     .argv

// const filePath = path.join(__dirname, options.path)

// fs.readFile('access.log', 'utf-8', (err, data) => {
//     console.log(data)
// })

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Пожалуйста введите имя файла: ', function (inputedPath){
//     const filePath = path.join(__dirname, inputedPath)
//
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         console.log(data)
//
//         rl.close()
//     })
//
// })

// rl.on('close', function () {
//     process.exit(0)
// })

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}

const list = fs.readdirSync(__dirname).filter(isFile)

inquirer
    .prompt([{
        name: 'fileName',
        type: 'list',
        message: 'Choose file:',
        choices: list
    }])
    .then((answer) => {
        console.log(answer.fileName)
        const filePath = path.join(__dirname, answer.fileName)

        fs.readFile(filePath, 'utf-8', (err, data) => {
            console.log(data)
        })
    })