// Удали все нечетные цифры в двухмерном массиве.
// Полученный результат выведи в консоль

const numbers = [
	[1, 2, 3, 4, 5],
	[11, 20, 33, 40, 55],
	[111, 200, 333, 400, 555],
];

const oddNumbers = numbers.map(number =>
	number.filter(e => e % 2)
)

console.log(oddNumbers)