// "use strict"
// // THIS in Regular Function expression
// //1 simple invocation - this is the window Object
// function myFunction(arg) {
// 	console.log(this, arg)
// }
// myFunction("Simple Invocation - Window Obj with strict mode off")
// console.log("-----------")

// //2 Method invocation inside an object/class - this value is the object/class owning the method
// const myObject = {
// 	innerVar: "inObjectVar",
// 	method(outParam) {
// 		console.log(this, "Method Invocation inside an Object or a Class")
// 		const x = () => {
// 			console.log(this, outParam, "from inside x")
// 		}
// 		x()
// 	},
// 	outMethod(outParam) {
// 		this.method(outParam)
// 		console.log(this, "inside outMethod")
// 	},
// 	showInnerVar: () => console.log(this.innerVar, "arrowfn in Object"),
// }
// myObject.method("from method") // logs myObject
// myObject.outMethod("from out method")
// myObject.showInnerVar()
// console.log("-----------")

// //3 Indirect invocation  - Giving a context to a method you want to call
// const myContext = { value: "A" }

// myFunction.call(
// 	myContext,
// 	...["Indirect invocation - call adding a context for the method"]
// )
// myFunction.apply(myContext, [
// 	"Indirect invocation - apply adding a context for the method",
// ]) // logs { value: 'A' }
// console.log("-----------")

// //4 During a constructor invocation using the 'NEW' keyword - this will be equal to the NEWly created instance/Object
// function MyFunction() {
// 	console.log(
// 		this,
// 		"Instance/Object created with new - constructor invocation"
// 	)
// }
// new MyFunction() // logs an instance of MyFunction
// console.log("-----------")

// // THIS in Arrow Function

// class Hero {
// 	constructor(heroName) {
// 		this.heroName = heroName
// 	}
// 	logName() {
// 		console.log(this.heroName)
// 	}
// 	logNameArrow = () => {
// 		console.log(this.heroName)
// 	}
// }
// const batman = new Hero("Batman")
// batman.logName()
// setTimeout(batman.logName, 1000) //when calling setTimeout, the context ( THIS ) will be the global closure. this  will be lost
// // after 1 second logs "undefined"
// setTimeout(batman.logName.bind(batman), 1000)
// // after 1 second logs "Batman"
// setTimeout(batman.logNameArrow, 1000) // being arrowFn it is tied lexically to to the created scope ( somehow as the created block scope created in for), wrapper Object.

var c = 100

var a = {
	c: 5,
	b: {
		c: 10,
		fn: function (params) {
			return this.c
		},
	},
}

console.log(a.b.fn()) // still 100, why not 5?
