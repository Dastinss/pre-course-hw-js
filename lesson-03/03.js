// При помощи метода slice() оставить в массиве все фрукты, кроме первого и двух последних. Полученный результат вывести в консоль

const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];

console.log(fruits.slice(1,fruits.length-2))
