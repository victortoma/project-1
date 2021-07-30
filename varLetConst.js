// closure fn keeps track of the passed arguments(variables) at the given time in the heap
// var wont create a block scope every time the loop starts, the scope of the closureFn in this case being GLOBAL.
// the value of i is reasigned in the global scope at the last loop run, before the actual setTimeout starts
for (var i = 0; i < 3; i++) {
	const closureFn = () => {
		console.dir(closureFn)
		console.log(i)
	}
	setTimeout(closureFn, 0)
}
// log: 3, 3, 3
// let every time creates a block scope, in the same time, a new refference for the function
for (let i = 0; i < 3; i++) {
	const closureFn = () => {
		console.dir(closureFn)
		console.log(i)
	}
	setTimeout(closureFn, 0)
}

//log: 0, 1, 2
function outer() {
	let arr = []
	for (let i = 0; i < 4; i++) {
		arr[i] = function () {
			console.dir(this)
			return i
		}
	}
	return arr
}

const get_arr = outer()

console.log(get_arr[0]())
console.log(get_arr[1]())
console.log(get_arr[2]())
console.log(get_arr[3]())
