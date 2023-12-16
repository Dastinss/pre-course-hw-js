const giveMeRightCondition = (value1, value2, maximum) => {
	// if (ЕСЛИ value1 РАВНО value2 И МЕНЬШЕ ИЛИ РАВНО  maximum) {
	if ( value1 === value2 && value1 <= maximum) {
		console.log('Success!');
	} else {
		console.log('Something wrong!');
	}
}

giveMeRightCondition(100, 200, 200)