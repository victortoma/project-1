class Shape {
	#privateMember = "privateMember"
	#privateMethod() {
		console.log(this.#privateMember + " is " + this.name)
	}
	constructor(name, sides, sideLength) {
		this.name = name
		this.sides = sides
		this.sideLength = sideLength
	}
	show() {
		console.log(this.name)
	}
	showPrivate() {
		console.log(this.#privateMember)
		console.log(this.#privateMethod())
	}
	classScopeArrow = () => {
		const insideVariable = "scope variable"
		const aRevealMethod = (outside) => {
			console.dir(aRevealMethod)
			console.log(this, insideVariable)
		}
		return { revealingMethod: aRevealMethod, x: "x" }
	}
	// revealModulePattern = function () {
	// 	const insideVariable = "scope variable"
	// 	const aRevealMethod = () => {
	// 		const y = "y"
	// 		console.dir(aRevealMethod)
	// 		console.log(this, insideVariable, y)
	// 	}
	// 	return { revealingMethod: aRevealMethod, x: "x" }
	// }
}
class Square extends Shape {
	constructor(sideLength) {
		super("square", 4, sideLength)
	}
	calcArea() {
		return this.sideLength ** 2
	}
}
let square = new Square(6)
Shape.prototype.globalScopeArrow = () => {
	const insideVariable = "scope variable"
	const aRevealMethod = () => {
		const y = "y"
		console.dir(aRevealMethod)
		console.log(this, insideVariable, y)
	}
	return { revealingMethod: aRevealMethod, x: "x" }
}
square.classScopeArrow().revealingMethod()
square.globalScopeArrow().revealingMethod()

let triangle = new Shape("triangle", 3, 6)

Shape.prototype.calcPerimeter = function () {
	let total = 0
	let i = 0
	while (i < this.sides) {
		i++
		total += this.sideLength
	}
	return total
}

// console.log(triangle.calcPerimeter())
// console.log(square.calcArea())
// console.log(square.calcPerimeter())
// console.log(square.show())
// console.log(square.showPrivate())
console.log(Shape.prototype)
console.log(square.constructor.__proto__.__proto__)
///////////////////
let arr = ["stringOne", "stringTwo", "stringThree"]
Array.prototype.reverseStringsFromArray = function () {
	// Object.prototype also
	this.forEach((element) => {
		console.log(element.split("").reverse().join(""))
	})
}
// arr.reverseStringsFromArray()
///////////////////
const modulePattern = (function () {
	const insideVariable = "this is from prototype"
	const aMethod = function () {
		console.dir(aMethod)
		console.log(this)
		// console.log(`${outside} ${insideVariable}`)
	}
	return { aMethod }
})()
// console.log(modulePattern.aMethod())
modulePattern.aMethod("hello")
///////////////////
var HTMLChanger = (function () {
	var privateFunc = function () {
		console.log(this)
		this.sayHello()
	}
	var hello = function () {
		console.log("say Hello")
	}
	var callPrivate = function () {
		privateFunc.call(this)
	}

	return {
		sayHello: hello,
		public: callPrivate,
		x: "x",
	}
})()
console.log(HTMLChanger.constructor.prototype)
HTMLChanger.public()
//say Hello

HTMLChanger.sayHello = function () {
	console.log("say Hi!")
}

HTMLChanger.public()
//say Hi!
