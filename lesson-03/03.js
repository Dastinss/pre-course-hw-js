// При помощи метода slice() оставить в массиве все фрукты, кроме первого и двух последних. Полученный результат вывести в консоль

const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];

// function restFruits(  ) {
// 	// let arr=[];
// 	// arr.push(fruits.slice(0,1).join(' '), fruits.slice(fruits.length-2))
// 	return fruits.slice(0,1).concat(fruits.slice(fruits.length-2))
// }

console.log(fruits.slice(0,1).concat(fruits.slice(fruits.length-2)))
