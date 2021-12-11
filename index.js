// console.log('Record 1');
//
// Promise.resolve().then(() => console.log('Record 2'));
//
// setTimeout(() => {
//     console.log('Record 3');
//     Promise.resolve().then(() => {
//         console.log('Record 4');
//     });
// });
//
// Promise.resolve().then(() => {
//     Promise.resolve().then(() => {
//         console.log('Record 5');
//     });
//     console.log('Record 6');
// });
//
// console.log('Record 7');

const EventEmitter = require('events');

const requestTypes = [
    {
        type: 'send',
        payload: 'to send a document'
    },
    {
        type: 'receive',
        payload: 'to receive a document'
    },
    {
        type: 'sign',
        payload: 'to sign a document'
    }
];

class Customer {
    constructor(params) {
        this.type = params.type;
        this.payload = params.payload;
    }
}

const generateIntInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

const generateNewCustomer = () => {
    const intervalValue = generateIntInRange(1, 5) * 1000;
    const params = requestTypes[generateIntInRange(0, 2)];

    return delay(intervalValue).then(() => new Customer(params));
}

class Handler {
    static send(payload) {
        console.log('Send request');
        console.log(`Customer need ${payload}`);
    }
    static receive(payload) {
        console.log('Receive request');
        console.log(`Customer need ${payload}`);
    }
    static sign(payload) {
        console.log('Sign request');
        console.log(`Customer need ${payload}`);
    }
    static pay() {
        console.log(`Customer needs to pay for the services`);
    }
}

class MyEmitter extends EventEmitter {};
const emitterObject = new MyEmitter();

emitterObject.on('send', Handler.send);
// emitterObject.on('send', Handler.pay);
emitterObject.once('send', Handler.pay);
emitterObject.on('receive', Handler.receive);
emitterObject.on('sign', Handler.sign);
//Удаление обработчика
// emitterObject.removeListener('send', Handler.pay);

//Максимальное количество обработчиков
// emitterObject.setMaxListeners(0);

//Обработка ошибок
// emitterObject.emit('error', new Error('Что-то пошло не так!'));

const run = async () => {
    const customer = await generateNewCustomer();
    emitterObject.emit(customer.type, customer.payload);

    run();
};

run();