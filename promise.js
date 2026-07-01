/*  let age = 19

let countValue = new Promise((resolve,reject) =>{
    if (age >= 18) {
        resolve('valid to vote')
    }
    else {
        reject('not possible to vote')
    }
})
//then will be called when only promise is resolved
countValue.then((result) =>{
    console.log(result)
})
.then(()=>{
    console.log('person can vote')
})
.catch((error) =>{
    console.log("we are into the catch block")
})
.finally(() =>{
console.log("person is indian")
}) */

const number = 0;

const checkNumber = new Promise((resolve,reject)=>{

       if (number >= 0 && number % 2 === 0) {
        resolve("It is a even number")       
       } else {
        resolve("It is a odd number")
       }
       if (number < 0) {
        reject("number is negative")
       }
        }
)
.then((result)=>{
    console.log(result)
})
.finally(()=>{
    console.log("Bye")
})
