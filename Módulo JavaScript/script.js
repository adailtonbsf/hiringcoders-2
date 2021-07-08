// function fizzBuzz(input) {
//     if (typeof input != 'number')
//         return 'Não é um número'
//     if (input % 3 == 0 && (input % 5 == 0))
//         return 'FizzBuzz'
//     if (input % 3 == 0) 
//         return 'Fizz'
//     if (input % 5 == 0) 
//         return 'Buzz'

//     return input;
// }

// console.log(fizzBuzz(0))

function reverseAString(str) {
    let resultado = '';
    for(let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
        console.log(resultado)
    }
}

reverseAString("Hello Gama Academy")
console.log('terminal')