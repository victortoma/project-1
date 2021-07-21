const arr = [0, 1, 2, 3]
clonedArr1 = [...arr]
clonedArr1.push(5)
console.log(arr, clonedArr1, "with spread the clonedArr isnt modified ")
console.log("---------------------")

const arra1 = [
	["unu"],
	["initial", undefined, function () {}, null, true, Symbol("")],
	3,
]
shallowArr = [...arra1]
console.log(shallowArr)
shallowArr[0].push("shallow")
console.log(
	arra1,
	shallowArr,
	"using spread to copy deep arrays will copy it shallow, both inside arr have the same reference "
)
console.log("---------------------")

const arra2 = [
	{ 3: "trei" },
	["initial", undefined, function () {}, null, true, Symbol("")],
	3,
]
shallowArr2 = [...arra2]
shallowArr2[0] = ["reference changed"]
console.log(
	arra2,
	shallowArr2,
	"replacing the inner array will replace the refereced array with the new array"
)
console.log("---------------------")

const arra3 = [
	{ 3: "trei" },
	["initial", undefined, function () {}, null, true, Symbol("")],
	3,
]
shallowArr3 = JSON.parse(JSON.stringify(arra3))
console.log(arra3, shallowArr3, "json wont copy symbols, undefined, neither Fn")
shallowArr3[1].push("added after")
console.log("---------------------")

const arra4 = [
	{ 4: "patru" },
	["initial", undefined, function () {}, null, true, Symbol("")],
	4,
]
const shallowArr4 = arra4.slice(0)
arra4[1].push("pushed item")
console.log(arra4, shallowArr4)
console.log("---------------------")

const arr2 = ["red", "green", "blue", "pink", "purple"]
console.log(arr2, "initial arr2")
const x = arr2.splice(1) // gives the first 4 elems
console.log(arr2, " initial array after arr2.splice(1)")
console.log(x, " x new array derived")
console.log("---------------------")
const arr3 = ["red", "green", "blue", "pink", "purple"]
const y = arr3.splice(3, 2) // the array is not altered, nothing is deleted nor added
console.log(arr3, "from index 3, deleted 2 items ")
console.log(y, " y new array derived arr3.splice(3, 2)")

console.log("---------------------")
const arr4 = ["red", "green", "blue", "pink", "purple"]
const z = arr4.splice(2, 2, "aasaafsda")
console.log(arr4, "initial arr modified after splice(2, 2,'aasaafsda')")
console.log(z, "  z new array derived")
console.log("---------------------")
const arr5 = ["red", "green", "blue", "pink", "purple"]
const w = arr5.splice(2, 0, "aasaafsda")
console.log(arr5, "initial arr modified after splice(2, 0,'aasaafsda')")
console.log(
	w,
	"w new array derived , nothing is added because nothing was taken from the original array"
)
console.log("---------------------")
const arr6 = [
	"red",
	"green",
	[
		function () {
			console.log("inside")
		},
	],
	{
		x: {
			s: 10,
			fn: function () {
				console.log(this.s)
			},
		},
		s: Symbol("s"),
	},
	"blue",
	"pink",
	"purple",
]
const arr6Portion = arr6.slice(1, 4)
console.log(arr6)
console.log(arr6Portion)
console.log(arr6Portion[2].x.fn())
console.log("---------------------")

const arr7 = ["red", "green", "blue", "pink", "purple"]
arr7.forEach((elem, index) => {
	if (elem === "blue") {
		return // break from loop for this index only
	} else console.log(elem, "   - foreach elem")
	// This callback implicitly returns `undefined`, which
	// is a falsy value. Therefore, looping continues.
})
console.log("---------------------")

arr7.some((elem, index) => {
	if (index === 3) {
		return true // break from loop
	} else console.log(elem, "   - some elem")
	// This callback implicitly returns `undefined`, which
	// is a falsy value. Therefore, looping continues.
})
console.log("---------------------")

for (let i = 1; i < arr7.length; i++) {
	if (i === 2) {
		console.log(i, "continue skips the index")
		continue
	}
	if (i === 3) {
		console.log(i, "break breaks the loop")
		break
	}
	console.log(arr7[i])
}
console.log("---------------------")
arr7.prop = "property value"

for (let key in arr7) {
	if (key === 2) {
		console.log(key, "continue skips the index")
		continue
	}
	if (key === 3) {
		console.log(key, "break breaks the loop")
		break
	}
	console.log(key, "break and continue doenst work in 'for in loops'")
}
console.log("---------------------")

for (const [index, value] of arr7.entries()) {
	if (index === 2) {
		console.log(value, "continue skips the index")
		continue
	}
	if (index === 3) {
		console.log(value, "break breaks the loop")
		break
	}
	console.log(value)
}
console.log("---------------------")
