const colors = require('colors/safe')

const arg1 = Number(process.argv[2])
const arg2 = Number(process.argv[3])

function printError(text) {
    console.log(colors.red(text))
    console.log(colors.red('Программа будет завершена!'))
}

function isNaturalNumber(num) {
    if (num < 2) return false
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

function printColorText(num, text) {
    switch (num) {
        case 1:
            console.log(colors.green(text))
            break
        case 2:
            console.log(colors.yellow(text))
            break
        case 3:
            console.log(colors.red(text))
            break
    }
}

function trafficLights(num1, num2) {
    if (isNaN(num1) && isNaN(num2)) {
        printError('Ошибка! Оба аргумента не является числами!')
        return
    } else if (isNaN(num1)) {
        printError('Ошибка! Первый аргумент не является числом!')
        return
    } else if (isNaN(num2)) {
        printError('Ошибка! Второй аргумент не является числом!')
        return
    }

    for (let i = num1, j = 1, counter = 0; i <= num2; i++) {
        if(i == num2 && counter == 0) {
            printColorText(3, 'В указанном диапазоне простых чисел нет!')
        }
        if (isNaturalNumber(i)) {
            printColorText(j, i)
            j++
            counter++
        } else continue

        if (j == 4) { j = 1 }
    }
}

trafficLights(arg1, arg2)