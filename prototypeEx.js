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
}

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

class Square extends Shape {
	constructor(sideLength) {
		super("square", 4, sideLength)
	}
	calcArea() {
		return this.sideLength ** 2
	}
}
let square = new Square(6)
console.log(triangle.calcPerimeter())
console.log(square.calcArea()) //
console.log(square.calcPerimeter())
console.log(square.show())
console.log(square.showPrivate())
console.log(Shape.prototype)

let arr = ["stringOne", "stringTwo", "stringThree"]

Array.prototype.reverseStringsFromArray = function () {
	this.forEach((element) => {
		console.log(element.split("").reverse().join(""))
	})
}
arr.reverseStringsFromArray()
