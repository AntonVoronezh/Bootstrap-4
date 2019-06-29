// Длина объекта
const obj = { a: 1, b: 2, c: 3 };
const length = Object.keys(obj).length;

// Итерация по объекту
// 1

const userObj = { first: 'aaaa', last: 'bbbbb' };

for (let u in userObj) {
	if (userObj.hasOwnProperty(u)) {
		console.log(u, userObj[u]);
	}
}

// 2
for (let u of Object.keys(userObj)) {
	console.log(u, userObj[u]);
}

// 3
Object.entries(userObj).forEach(([key, value]) => {
	console.log(key, value);
});

// Объект в массив
const personObj = { name: 'ddd', age: 10 };
const personArr = [];
//1
Object.keys(personObj).forEach(key => personArr.push([key, personObj[key]]));

//2
Object.keys(personObj).map(key => personArr.push([key, personObj[key]]));

// 3
Object.entries(personObj);


// проверка наличия свойст в объекте
const obj = { aaa: 1, bbbb: 2, c: 3 };

// 1
let result = 'toString' in obj;

// 2
result = obj.hasOwnProperty('aaa')