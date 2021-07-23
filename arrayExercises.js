//1
const currencyForExchangeArr = ["100$", "45E", "73L", "67CAD", 0, "110"]
const currencyRatesArr = [
	{ symbol: "$", ronRate: 4.5 },
	{ symbol: "E", ronRate: 5 },
	{ symbol: "L", ronRate: 5.5 },
	{ symbol: "CAD", ronRate: 4 },
]
//fetch
let base = "RON"
let recivedData

const createSpan = (text) => {
	let p = document.createElement("span")
	p.innerHTML = text
	return document.body.appendChild(p)
}

async function fetchFunction(url = "", data = {}, method = "GET") {
	const response = await fetch(url)
	return response.json()
}

fetchFunction(
	"http://api.exchangeratesapi.io/v1/latest?access_key=08b0089789e9ffd4e260670d86037c10&symbols=USD,RON,CAD,GBP"
).then((data) => iterateObj(data.rates))

// fetch(
// 	"http://api.exchangeratesapi.io/v1/latest?access_key=08b0089789e9ffd4e260670d86037c10&symbols=USD,RON,CAD,GBP"
// )
// 	.then((response) => response.json())
// 	.then((data) => iterateObj(data.rates))

const iterateObj = (data) => {
	console.log(data)
	for (let rate in data) {
		createSpan(`${rate} : ${data[rate]}`)
	}
}

// return (document.querySelector("p").innerHTML
// }

console.log(recivedData)
//fn
const currencyConverterToRon = (currencyValue, ratesArr) => {
	if (typeof currencyValue === "string") {
		const regexp = /[0-9]/gi
		const dividerIndex = currencyValue
			.split("")
			.findIndex((index) => !index.match(regexp))
		if (dividerIndex !== -1) {
			const value = currencyValue.slice(0, dividerIndex)
			const currencySymbol = currencyValue.slice(dividerIndex)
			let currencyRate = ratesArr.find(
				(currency) => currency.symbol === currencySymbol
			)
			const valueinRon = value * currencyRate.ronRate
			const resultInRonDisplayValue = `${currencyValue} is ${valueinRon} Ron`
			return resultInRonDisplayValue
		} else {
			return `${currencyValue} Ron`
		}
	} else {
		return "no proper value"
	}
}
const ronArray = currencyForExchangeArr.map((currencyValue) =>
	currencyConverterToRon(currencyValue, currencyRatesArr)
)
console.log(ronArray)

// //2
// //  display only numbers devided by 5
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25]
// const arrayDiv5 = array.filter((e) => !(e % 5))
// const arrayDiv2 = array.filter((e) => e % 2 === 0)
// const arrayDivOdd = array.filter((e) => e % 2)
// console.log(arrayDiv5, "divby5")
// console.log(arrayDiv2, "divby2")
// console.log(arrayDivOdd, "divOdd")
// console.log("---------------------")
// const fibonacciFn = (fibonacciArrayLength, a = 1, b = 2) => {
// 	let array = []
// 	array[0] = a
// 	array[1] = b
// 	for (i = 2; i <= fibonacciArrayLength; i++) {
// 		let total = array[i - 2] + array[i - 1]
// 		array[i] = total
// 	}
// 	console.log(array)
// }
// fibonacciFn(5)
// console.log("---------------------")

// const fibonacciRecursive = (n) => {
// 	console.log(n)
// 	if (n <= 1) {
// 		return n
// 	} else {
// 		return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
// 	}
// }
// console.log(fibonacciRecursive(4))
// console.log("---------------------")

// document.body.innerHTML = array
