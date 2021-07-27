'use strict'

// function hello() {
//     return 'Привет,JavaScript!'
// }
//
// console.log(hello())


// const login = prompt ('Введите имя');
// let name = 'Василий'
//
// function hello(login) {
//
//     if (login){
//         console.log('Привет,' + login);
//     }else{
//         console.log('Привет, гость!')
//     }
// }
//
// hello(login);

// let n = 8
// let m = 4
//
// function mul(n,m){
//     return n*m
// }
//
// console.log(mul(n,m))


const userInput = prompt ('some text');

function arrayRecord (text){
    const arr = [];
    arr.push(text);
    return arr;
}

console.log(arrayRecord(userInput));
