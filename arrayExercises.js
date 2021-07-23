//1
const ArrOfCurrencyForExchange = ["100USD", "45RON", "73CAD", "67GBP", 0, "110"]
const selectCurrencyDropdown = document.querySelector("#select")
const url =
	"http://api.exchangeratesapi.io/v1/latest?access_key=08b0089789e9ffd4e260670d86037c10&"

const createDivFn = (text) => {
	let p = document.createElement("div")
	p.innerHTML = text
	return document.body.appendChild(p)
}

const currencyConverterToEur = (valueToBeExchanged, ratesObj) => {
	if (typeof valueToBeExchanged === "string") {
		const regexp = /[0-9]/gi
		let dividerIndex = valueToBeExchanged
			.split("")
			.findIndex((index) => !index.match(regexp))
		if (dividerIndex !== -1) {
			let value = valueToBeExchanged.slice(0, dividerIndex)
			let currencySymbol = valueToBeExchanged.slice(dividerIndex)

			let valueInEuro = (value / ratesObj[currencySymbol]).toFixed(3)
			let resultInEurDisplayValue = `${valueToBeExchanged} is ${valueInEuro} EUR`
			return resultInEurDisplayValue
		} else {
			return `${valueToBeExchanged} EUR`
		}
	} else {
		return "no proper value"
	}
}

async function fetchFunction(url = "", base = "", symbols = "") {
	const baseString = base.length ? `&base=${base}` : ""
	const symbolsString = symbols.length ? `&symbols=${symbols}` : ""

	const response = await fetch(`${url}${baseString}${symbolsString}`)
	return response.json()
}

selectCurrencyDropdown.addEventListener("input", () => {
	fetchFunction(
		url,
		`${selectCurrencyDropdown.value}`,
		"GBP,USD,RON,CAD"
	).then((currencyObj) => {
		createDivFn(selectCurrencyDropdown.value)
		return displayExchangedCurrency(currencyObj.rates)
	})
})

const displayExchangedCurrency = (currencyObj) => {
	for (let rate in currencyObj) {
		createDivFn(`${rate}: ${currencyObj[rate]}`)
	}
	let exchangedArrayForDisplay
	exchangedArrayForDisplay = ArrOfCurrencyForExchange.map(
		(valueToBeExchanged) =>
			currencyConverterToEur(valueToBeExchanged, currencyObj)
	)
	console.log(exchangedArrayForDisplay)
	exchangedArrayForDisplay.forEach((element) => createDivFn(element))
}
//------------------------------

//  display only numbers devided by 5
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25]
const arrayDiv5 = array.filter((e) => !(e % 5))
const arrayDiv2 = array.filter((e) => e % 2 === 0)
const arrayDivOdd = array.filter((e) => e % 2)

console.log(arrayDiv5, "divby5")
console.log(arrayDiv2, "divby2")
console.log(arrayDivOdd, "divOdd")
console.log("---------------------")

const fibonacciFn = (fibonacciArrayLength, a = 1, b = 2) => {
	let array = []
	array[0] = a
	array[1] = b
	for (i = 2; i <= fibonacciArrayLength; i++) {
		let total = array[i - 2] + array[i - 1]
		array[i] = total
	}
	console.log(array)
}
fibonacciFn(5)
console.log("---------------------")

const fibonacciRecursive = (n) => {
	console.log(n)
	if (n <= 1) {
		return n
	} else {
		return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
	}
}
console.log(fibonacciRecursive(4))
