//Под surname добавь married: true. И разумеется проверь, что женат только один парень…
// (Т.е. необходимо создать глубокую копию объекта passportMarried ,
// и добавить в него новый ключ: значение).

let passportMarried = {
	name: "Petr",
	surname: "Petrov",
	address: {
		country: "USA",
		city: "Bobryisk"
	}
};

let passportMarried2 = { ...passportMarried, address: { ...passportMarried.address } }
passportMarried2.married = true;

console.log(passportMarried);
console.log(passportMarried2);
