// Длина объекта
const obj = { a: 1, b: 2, c: 3 };
const length = Object.keys(obj).length;

// Итерация по объекту
// 1

const userObj = { first: 'aaaa', last: 'bbbbb' };

for(u in userObj) {
   console.log(u, userObj[u])
}
