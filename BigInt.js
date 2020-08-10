/*
At the moment the maximum number you can store as an integer in JavaScript is pow(2, 53) - 1 . But BigInt actually allows you to go even beyond that.  
*/


let shortInteger = Number.MAX_SAFE_INTEGER

console.log(shortInteger)

console.log(shortInteger++)

let bigInteger = 9007199254740992n

console.log(bigInteger)

console.log(bigInteger++)

