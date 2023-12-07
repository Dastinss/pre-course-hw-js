const randomNumber = () => {
	const number = Math.floor( Math.random() * 100 );
	return number % 2
		? console.log( number + ' :Это нечетное число' )
		: console.log( number + ' :Это четное число' )
}

randomNumber();