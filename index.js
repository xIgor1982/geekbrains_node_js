// console.log('Hello World!');
//----------------- Lesson 1 ----------------->>>>>>
// const colors = require('colors/safe')
//
// console.log(colors.red('Hello World!'));
//<<<<<<----------------- Lesson 1 -----------------

//----------------- Lesson 2 ----------------->>>>>>

//Код на уроке
const EventEmitter = require('events')
const emitter = new EventEmitter()

const RequestTypes = [{
    type: 'send', payload: 'to send a document',
}, {
    type: 'receive', payload: 'to receive a document',
}, {
    type: 'sign', payload: 'to sign a document',
},]

class Customer {
    constructor({type, payload}) {
        this.type = type;
        this.payload = payload;
    }
}

const generateIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateNewCustomer = () => {
    const randomTypeIndex = generateIntInRange(0, RequestTypes.length - 1)
    const randomTypeParams = RequestTypes[randomTypeIndex]

    return new Customer(randomTypeParams)
}

const run = async () => {
    const {type, payload} = generateNewCustomer()
    const delay = generateIntInRange(1000, 5000)

    emitter.emit(type, payload)

    await new Promise(resolve => setTimeout(resolve, delay))
    await run()
}

// emitter.on('test', () => {
//     console.log('Test!')
// })
// emitter.emit('test')

class Handler {
    static send(payload) {
        console.log('Send request', payload)
    }

    static receive(payload) {
        console.log('Receive request', payload)
    }

    static sign(payload) {
        console.log('Sign request', payload)
    }
}

emitter.on('send', Handler.send)
emitter.on('receive', Handler.receive)
emitter.on('sign', Handler.sign)
// emitter.on('error', (err) => {
//     console.log(err)
// })
emitter.on('error', console.log)

run()


