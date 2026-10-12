var name="Sameer"
// let has a block scope 
let age =22

const id="As123"
console.log(name)
console.log(age)
console.log(id)

// You can declare the var keyword as many times as we want
var name = "Ayesha"
console.log(name)


// You cannot use keyword "const" with the same variable name twice 
// const id="As1234"
// console.log(id)


// You need not to use the keyword "Let" again after declaring once for a variable 
age = 21
console.log(age)


// var new="syed"
// // new="Sameer"
// console.log(new)



// lets see the difference between var, let and const in block scopes

if(true){
    // var will be available outside the block scope i.e it has a global scope
    var name="Sameer Syed"
    // let will be available only inside the block scope i.e it has a block scope
    let age=23
    const id="As1234"
}
console.log(name)
//  it cannot access the age declared inside the block scope as it has a block scope but it can access the age declared outside the block scope 
console.log(age)
// it cannot access the id declared inside the block scope as it has a block scope but it can access the id declared outside the block scope
console.log(id) 


// lets try a program 
//  Swapping of two numbers with and without using a third variable

let a =20
let b=30
console.log("Before swapping a =",a,"b =",b)
// Now a should be 30 and b should be 20
a=a+b 
b=a-b
a=a-b
console.log("After Swapping a =",a,"b =",b)

let x=20
let y=30
let temp
console.log("Before swapping x =",x,"y =",y)
temp=x
x=y
y=temp
console.log("After Swapping x =",x,"y =",y)


//  Find the largest of two numbers 

let num1=20
let num2=30
if(num1>num2){
    console.log(num1,"is the largest number")
}
else{
    console.log(num2,"is the largest number")
}


// Multiplication table 

let num=5
for(let i=1;i<=10;i++){
    console.log(num,"*",i,"=",num*i);
}


// Factorial of a number 

let number=5
let factorial=1
for (let i=number;i>=1;i--){
    factorial=factorial*i
}
console.log("factorial of",number,"is",factorial)


let number1=12321
let number2=number1
let reversed=0
let temp=0
while(number1>0){
    temp=number1%10
    // console.log("temp is",temp)
    reversed=reversed*10+temp
    number1=parseInt(number1/10)
}
console.log("The number is ",number2,"And the reversed number is",reversed)
if(number2==reversed){
    console.log("The number is a palindrome")
}
else{
    console.log("The number is not a palindrome")
}


