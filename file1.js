const file1 = (function () {
	const insideVariable = "this is from file1"
	const aMethod = (outside) => {
		console.log(`${outside} ${insideVariable}`)
	}
	return { aMethod }
})()
