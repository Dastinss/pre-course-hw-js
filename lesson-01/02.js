const randomNumber = () => {
	const number1 = Math.floor( Math.random() * 100 );
	return number1 % 2
		? console.log( number1 + ':Это нечетное число' )
		: console.log( number1 + ':Это четное число' )
}

randomNumber();