const obj = {
	arr: [
		"trei",
		undefined,
		true,
		function () {
			return console.log("hey")
		},
	],
	num: 3,
	symboObj: {
		symbo: Symbol(""),
		x: this.num,
		anotherObj: {
			innerMethod: function (cloneType) {
				console.log(`innerObj method ${cloneType} `)
			},
		},
	},
	method: function (text) {
		console.log(text, "using this keyword is:", this.num)
	},
}
console.log("ORIGINAL OBJ:", obj)
console.log("---------------------")

const clonedObj = obj
console.log(clonedObj, "reference to the original obj")
console.log("---------------------")

stringifiedObj = JSON.parse(JSON.stringify(obj))
console.log(stringifiedObj, "stringify shallow doesnt copy methods")
console.log("stringifiedObj is the same with obj?", stringifiedObj === obj)
// stringifiedObj.method("JSON stringify method")
console.log("---------------------")

const objAssigned = Object.assign({}, obj)
console.log(
	objAssigned,
	"Object assign is altered by an ulterior push, its the fastest and can be used to add properties to an existing object, giving the first param the actual obj"
)
objAssigned.method("Object assign method")
objAssigned.symboObj.anotherObj.innerMethod("Object assign method ")
objAssigned.arr.push("pushed after")
console.log("objAssigned is the same with obj?", objAssigned === obj)
console.log("---------------------")

const forKeyObj = {}
for (let key in obj) {
	forKeyObj[key] = obj[key]
}
console.log(forKeyObj, "forKeyIn method")
forKeyObj.method("for key in method")
forKeyObj.symboObj.anotherObj.innerMethod("for key in method")
console.log("forKeyObj is the same with obj?", forKeyObj === obj)

console.log("---------------------")

const spreadObj = { ...obj }
console.log(
	spreadObj,
	"spreadObj cannot assign properties to the same existing obj if it is declared with const"
)
spreadObj.method("spreadObj")
spreadObj.symboObj.anotherObj.innerMethod("spread clone")
console.log("spreadObj is the same with obj?", spreadObj === obj)

console.log("---------------------")

// obj.num = "replaced"
console.log(obj, "obj after key change")
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
const globalArr2 = [0, 1, 2]
function pure2(arr, elem) {
	const newArr = arr
	arr.push(elem)
	return newArr
}
console.log(pure2(globalArr2, 7), "new arr returned by fn")
