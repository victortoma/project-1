const obj = {
	a: new Date(),
	b: NaN,
	c: new Function(),
	d: undefined,
	e: function () {},
	f: Number,
	g: false,
	h: Infinity,
	sym: Symbol("xFIRST"),
	num: 3,
	arr: [
		"trei",
		undefined,
		true,
		function () {
			return console.log("hey")
		},
	],
	symboObj: {
		symbo: Symbol(""),
		x: false,
		anotherObj: {
			x: "string",
			innerMethod: function (cloneType) {
				console.log(`innerObj method ${cloneType} `)
			},
		},
	},
	method: function (text) {
		console.log(text, "using this keyword is:", this.num)
	},
}

const deepCopyFunction = (inObject) => {
	let outObject, key
	if (typeof inObject !== "object" || inObject === null) {
		return inObject //if keys of the object are other then obj // for recursive call especially
	}

	outObject = Array.isArray(inObject) ? [] : {}

	for (key in inObject) {
		outObject[key] = deepCopyFunction(inObject[key]) // clone every key of the obj
	}

	return outObject
}

const cloned = deepCopyFunction(obj)
console.log("ORIGINAL OBJ:", obj)
console.log("---------------------")
console.log(cloned)
console.log("---------------------")

const equalObj = obj
console.log(equalObj, "equal reference to the original obj")
console.log("---------------------")

stringifiedObj = JSON.parse(JSON.stringify(obj))
console.log(stringifiedObj, "stringify shallow doesnt copy methods")
console.log("---------------------")

const objAssigned = Object.assign({}, obj)
console.log(
	objAssigned,
	"Object assign is altered by an ulterior push inside an referenced array, its the fastest and can be used to add properties to an existing object, giving the first param the actual obj"
)
objAssigned.symboObj.anotherObj.innerMethod("Object assign method ")
objAssigned.arr.push("pushed after")
console.log("---------------------")

const forKeyObj = {}
for (let key in obj) {
	forKeyObj[key] = obj[key]
}
console.log(forKeyObj, "forKeyIn method")
forKeyObj.symboObj.anotherObj.innerMethod("for key in method")
console.log("---------------------")

const spreadObj = { ...obj }
console.log(
	spreadObj,
	"spreadObj cannot assign properties to the same existing obj if it is declared with const"
)
console.log("---------------------")

//impure2
let i = 0
console.log(i, "initial global state")
while (i < 5) {
	i += 1
}
console.log(i, "global state is modified")
console.log("---------------------")
//pure2
function loop(j) {
	if (j < 5) {
		console.log(j)
		return loop(j + 1)
	}
	return j
}
const k = loop(2)
console.log(k)
console.log("---------------------")

//impure2
const globalArr = [0, 1, 2]
console.log("before", globalArr)

function impure2(elem) {
	return globalArr.push(elem)
}
impure2(3)
console.log("after", globalArr)
console.log("---------------------")

//pure2
function pure2(arr, elem) {
	const newArr = arr
	arr.push(elem)
	return newArr
}
console.log(pure2(globalArr, 7), "new arr returned by fn")
