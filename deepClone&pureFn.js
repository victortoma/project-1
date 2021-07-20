const arr = [0, 1, 2, 3]
clonedArr = [...arr]
arr.push(5)
console.log(arr, clonedArr, "cloned shallow")

const deepArr = [["unu"], 1]
shallowArr = [...deepArr]
shallowArr[0].push("shallow")
console.log(deepArr, shallowArr)

const deepArr2 = [["doi"], 2]
shallowArr2 = [...deepArr2]
shallowArr2[0] = ["reference changed"]
console.log(deepArr2, shallowArr2)

const deepArr3 = [["trei"], 3]
shallowArr3 = JSON.parse(JSON.stringify(deepArr3))
deepArr3[0].push("deep")
console.log(deepArr3, shallowArr3)

//impure
const impure1 = (x) => {
	const doubled = x * 2
	return doubled + 10
}
//pure1
const pure1 = (x) => {
	return ((doubled) => doubled + 10)(x * 2)
}
//impure2
let i = 0
while (i < 5) {
	i += 1
}
console.log(i)
//pure2
function loop(j) {
	if (j < 5) {
		console.log(j)
		return loop(j + 1)
	}
	return j
}
const k = loop(0)

const arra = ["red", "green", "blue", "pink", "purple"]
arra.forEach((elem, index) => {
	if (elem === "blue") {
		return // break from loop for this index only
	} else console.log(elem, "   - foreach elem")
	// This callback implicitly returns `undefined`, which
	// is a falsy value. Therefore, looping continues.
})
arra.some((elem, index) => {
	if (index === 3) {
		return true // break from loop
	} else console.log(elem, "   - some elem")
	// This callback implicitly returns `undefined`, which
	// is a falsy value. Therefore, looping continues.
})

// arra.splice(4) // gives the first 4 elems
// arra.splice(2, 0) // the array is not altered, nothing is deleted nor added
arra.splice(0, "aasaafsda", 0)
console.log(arra)
