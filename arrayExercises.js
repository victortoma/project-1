// - array ['100$', '45E', '73L', '67CAD'] transform money into ron and display them like 100$ is 400 lei ..
// - array [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,25] display only even numbers
// - array [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,25] display only odd numbers

//1
const arrayCurrency = ["100$", "45E", "73L", "67CAD", 0, "110"]

const getCurrency = (arrayElem) => {
	if (typeof arrayElem === "string") {
		const regexp = /[0-9]/gi
		const index = arrayElem.split("").findIndex((elem) => !elem.match(regexp))
		if (index !== -1) {
			const value = arrayElem.slice(0, index)
			const currency = arrayElem.slice(index)
			let currencyValue
			switch (currency) {
				case "$":
					currencyValue = 4
					break
				case "E":
					currencyValue = 5
					break
				case "L":
					currencyValue = 6
					break
				case "CAD":
					currencyValue = 3
					break
			}
			const finalValue = value * currencyValue
			const finalValueString = `${arrayElem} is ${finalValue} Ron`
			return finalValueString
		} else {
			return `${arrayElem} Ron`
		}
	} else {
		return "no proper value"
	}
}
const ronArray = arrayCurrency.map((elem) => getCurrency(elem))
console.log(ronArray)

//2
//  display only numbers devided by 5
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25]
const arrayDiv5 = array.filter((e) => !(e % 5))
const arrayDiv2 = array.filter((e) => e % 2 === 0)
const arrayDivOdd = array.filter((e) => e % 2)
console.log(arrayDiv5)
console.log(arrayDiv2)
console.log(arrayDivOdd)
