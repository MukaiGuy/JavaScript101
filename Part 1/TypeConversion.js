// Sometimes called Type Casting

let amount = "100";
let amountB = '90';


// *** Srting to Number ***
// Method 1
amount = parseInt(amount);
amount = parseFloat(amount);

// Method 2: Unery
amountB = +amountB

// Method 3: Number
amount = Number(amount);

// *** Number to String ***
// Method 1
amount = amount.toString();

// Method 2: 
amount = String(amount)

// *** Number to Boolean ***
// '0' is false always everyother number is true
amount = Boolean(amount);

// NaN means "Not a Number"



console.log(amountB, typeof amountB)

// x = 5 + '5'
// console.log(x, typeof x)

// const myString = "developer"

// x = myString.charAt(0) // returns 'd'

// y = x.toUpperCase() // returns 'D'

// z = myString.slice(1,9) // returns "eveloper"

// final = y+z

// console.log(final, typeof final)

// const myString = 'developer'

// let myNewString 

// myNewString = myString.charAt(0).toUpperCase() 
// y = myString.substring(1)

// console.log(y)

let x

x = Math.floor(Math.random() * 100 + 1)

let y

y = Math.floor(Math.random() * 50 + 1)

const sum = x + y
const sumOut = `${x} + ${y} = ${sum}\n`
const dif = x - y
const difOut = `${x} - ${y} = ${dif}\n`
const pro = x * y
const productOut = `${x} * ${y} = ${pro}\n`
const quo = x / y
const quotientOut = `${x} / ${y} = ${quo}\n`
const rem = x % y
const remainderOut = `${x} % ${y} = ${rem}\n`

console.log(x, y,)
console.log(sumOut)
console.log(difOut)
console.log(productOut)
console.log(quotientOut)
console.log(remainderOut)

let d

d = new Date()
console.log(d)

d1 = new Date(2021, 0, 10, 12, 45, 0)
console.log(d1)


d2 = Date.now() // returns the time in milliseconds (aka epoch)
console.log(d2)

d3 = new Date('07-10-2021 14:37:12 UTC')
d3 = d3.getTime()
console.log(d3)

d4 = new Date() // now
d4 = d4.getTime()
console.log(d4) // 1625934600000

// convert to epoch to human readable
d5 = new Date(d3)
console.log(d5)

d6 = d5.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
    hour12: true,
    timeZoneName:'short'
})
console.log(d6)

let x1

const mixed = [12, 'Hello', true, null]

x1 = mixed[1] // 'Hell0'
console.log(x1)
//Append an item to an array
x1 = mixed[mixed.length] = 'Blueberry' // [12, 'Hello', true, null, 'Blueberry']
console.log(x1)
//Change an item in an array
x1 = mixed[2] = false // [12, 'Hello', false, null, 'Blueberry']

x1 = mixed

console.log(x1)

const arr = [1,2,3,4,5]

x3 = arr.reverse()
console.log(x3)

x3 = arr.unshift(6)
x3 = arr.push(0)
x3 = arr
console.log(x3)

const person = {
	name: 'Jane Doe',
	age: 30,
	isAdmin: false
}

// create a fuction
person.greet = function () {
	console.log(`Hello, I am ${this.name} and it's nice to meet you.`)
}
// call new function
person.greet()

let x4 = person
console.log(x4)

const person2 = {
    'firstName': 'Jane',
    'lastName': 'Doe',
    'age': 30,
    'isAdmin': false
}

console.log(person2)

const person3 = {
	name:{
		first: 'Jane',
		middle: 'Fox',
		last: 'Doe',
	},
	dob: new Date(1992, 09, 02),
	today: '',
	address: {
		addressLine1: '5524 Joyce Dr',
		addressLine2: null,
		city: 'Charlotte',
		adminstrativeArea: 'NC',
		postalCode: {
			zip5: '28215',
			zip4: null
		},
		country: 'USA'
	},
	email: {
		username: 'jane.doe',
		domain: 'gmail.com',
		email: 'jane.doe@$gmail.com'	}
}

start = new Date(1992, 10, 02)
thatYear = start.getFullYear()
thatMonth = start.getMonth()
thatDay = start.getDate()
dobWas = `${thatMonth}-${thatDay}-${thatYear}`

now = Date.now()
time = new Date(now)
thisYear = time.getFullYear()
today = time.getDate()
thisMonth = time.getMonth()
todayIs = `${thisMonth}-${today}-${thisYear}`
age = thisYear - thatYear

person3.today = todayIs
person3.dob = dobWas
person3.age = age

console.log(person3)


//JSON Stringification
const post = [{
	id: 1,
	title: 'Post One',
	body: 'This body'
},
{
    id: 2,
    title: 'Post Two',
    body: 'This body'
}]

const str = JSON.stringify(post)

// Convert JSON String to Object
const obj = JSON.parse(str)

console.log(obj)

console.log(str)
