// Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan",
// и убедись в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".

let passport = {
	name: "Petr",
	surname: "Petrov",
};

let passport1 = {...passport}
passport1.name = 'Ivan'

console.log(passport.name)
console.log(passport1.name)