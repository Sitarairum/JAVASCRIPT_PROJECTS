/*let counts = 5
console.log(counts)
// varaibles
let myage=22
console.log(myage)

// mathmatical operations
let c = 5+7
console.log(c)
let firstbatch = 5
let sceondbatch = 7
let result = firstbatch+sceondbatch
console.log(result)

//increment decrement
let bonuspoint = 50

bonuspoint  = 50+bonuspoint
console.log(bonuspoint)

bonuspoint  = bonuspoint - 75
console.log(bonuspoint)


/////functions

function countdown(){

    console.log(45)

}


countdown()


let lap1 = 34
let lap2 = 33
let lap3 = 36

function laptime()
{
    totallap = lap1+lap2+lap3
  console.log(totallap)
}


laptime()




///strings
let username = "sitara"
console.log(username)


let message = "you have  tree  new notifications"

let messageTouser = message +", " + username + "!"

console.log(message +", " + username)

console.log(messageTouser)


let names = "irum"
let greeting = "hi my name is "
let mygreetig  = greeting +  " " + names
console.log(mygreetig)


let nam = 42
let greet = "hi my name is "
let mygreet  = greeting +  " " + nam
console.log(mygreet)

let points = 4
let bonuspoints = "10"
let totalpoints = points + bonuspoints
console.log(totalpoints)


console.log(4+5)
console.log("2"+"4")
console.log("5" + 1)
console.log(100 + "100")

let welcomEL = document.getElementById("welcome-el")

let naame = "sitara irum"
let greets = "welcome back "

welcomEL.innerText = greets + naame

welcomEL.innerText +=  "wave"

//  CHALLENGE 1

let firstname = "sitara"
let lastname = "irum"
let fullname = firstname + " " + lastname
console.log(fullname)


//  CHALLENGE 2
let name1 = "sitara"
let grreet = "hi there"

function greet(){
    console.log( greet  + "," + name1 + "!" )
}

greet()



//  CHALLENGE 3
let mypoints = 3

function add3points(){

    mypoints = mypoints + 3

}


function remove1point(){
    mypoints = mypoints - 1

}

add3points()
add3points()
add3points()
remove1point()
remove1point()
console.log(mypoints)


//challeng 3
console.log("2"  + 2) //4 wrong     "22"
console.log(11  + 7)//18
console.log(6  + "5") //11 wrong   "65" 
console.log("my points "  + 5 + 9) //my points 14 wrong  "59"
console.log(2  + 2) //4
console.log("11"  + "14") //25 wrong "1114"


//challenge 4
errorel = document.getElementById("error")
console.log(errorel)

function purchase(){
    console.log("buttob clicked")
    errorel.textContent = "something went wrong try again later"
}*/


//calculator challege

let num1=8 
let num2=2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let sumEl = document.getElementById("sum-el")

function add(){
    let result = num1+num2
    sumEl.textContent =  "sum " +result


}

function subtract(){
    let result = num1-num2
    sumEl.textContent =  "sum " +result


}

function multiply(){
    let result = num1*num2
    sumEl.textContent =  "sum " +result


}


function divide(){
    let result = num1/num2
    sumEl.textContent =  "sum " +result


}






