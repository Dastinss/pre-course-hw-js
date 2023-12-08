const randomNumber = (number1 = Math.floor( Math.random() * 100 )) => {
	return number1 % 2
		? number1 + ':Это нечетное число'
		: number1 + ':Это четное число';
}

console.log(randomNumber())