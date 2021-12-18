//разбор методички

const fs = require('fs')

//*************** Чтение файла ***************

//Асинхронное чтение файла
// fs.readFile('./access.log', (err, data) => console.log(data.toString('utf-8')))


//Синхронное чтение файла
// const data = fs.readFileSync('./access.log');
// const data = fs.readFileSync('./access.log', 'utf-8')
//
// console.log(data);

//*************** Запись файла ***************

// const log1 = '127.0.0.1 - - [30/Jan/2021:11:11:20 -0300] "POST /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"';
// const log2 = '127.0.0.1 - - [30/Jan/2021:11:11:25 -0300] "GET /boo HTTP/1.1" 404 0 "-" "curl/7.47.0"';

//->Асинхронная запись файла
// Файл перезаписывается
// fs.writeFile('./access.log', log1, (err) => {
//     if (err == null) console.log('Запись в файл произошла успешно')
//     else console.log('Ошибка при записи в файл', err)
// });

// fs.writeFile('./access.log', `\n${log1}`, {flag: 'a'}, (err) => {
//     if (err == null) console.log('Запись в файл произошла успешно')
//     else console.log('Ошибка при записи в файл', err)
// })

//->Синхронная запись файла

//Файл перезаписывается
// fs.writeFileSync('./access.log', log2);

// fs.writeFileSync('./access.log', `\n${log2}`, {flag: 'a'}, (err) => console.log(err))

//*************** Поток на чтение ***************
// const readStream = fs.createReadStream('./access.log', 'utf-8');
// readStream.on('data', (chunk) => {
//     console.log('Chunk');
//     console.log(chunk);
// })
// readStream.on('end', () => console.log('Чтение файла завершено!'))
// readStream.on('error', () => console.log(err))