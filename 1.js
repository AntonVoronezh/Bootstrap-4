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
result = obj.hasOwnProperty('aaa');


// объединение объектов
const obj = { aaa: 1, bbbb: 2, c: 3 };
const obj2 = { aaa: 10, ссс: 2, c: 4 };

// вычтсляемые значения
const obj = { };

obj['ffff'] = 11111;


// фильтрация объектов
const obj = {aaa: 1, bbbb: 2, cсс: 3};

const filteredObj = {}
const res = Object.keys(obj).filter(k => k !== 'aaa').map(k => filteredObj[k] = obj[k])


// получение значений объекта
const obj = { aaa: 111, bbbb: 222, cсс: 333 };

// 1
const res = Object.keys(obj).map(k => obj[k])

// 2
const res = Object.values(obj);


// поверхностная копия массива (shalllou)
const arr = ['aaa', 'bbb'];

// 1
const newArr = [].concat(arr);

// 2
const newArr = arr.slice();

// 3
const newArr = arr.concat('ccc');


// получение случайного эл-та массива
const arr = [11, 22, 33, 44, 55, 66];

const rand = Math.round(Math.random() * arr.length);


// удаление из массива псевдоложных значенией
const arr = [11, '', '33', null, {}, [], NaN, undefined];

const newArr = arr.filter(a => a);


// удаление из массива значенией
const arr = [3, 4, 5, 6, 7, 8];

// 1
const newArr = arr.filter(a => a > 5);

// 2
const newArr = arr.splice(3,1, 'ggggg');


// преобразование номеров
const card = '1234-2345-4567';

const cardNew = card.split('').filter(c => c !== '-');

console.log(cardNew.fill('*',0, 5).join(''));


// поиск всех вхождений
const names = ['A', 'F', 'V', 'S', 'F'];

const namesRes = names.findIndex(n => n === 'F');

const findAllIndex = (arr, value) => {
	const out = [];
	arr.forEach(a => a === value && out.push(a));
	return out;
};

