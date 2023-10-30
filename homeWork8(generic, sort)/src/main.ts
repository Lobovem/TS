// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.
type ParamType = (number | string | boolean | object | Function | symbol | undefined)[];

function isString(arr: ParamType): arr is string[] {
  return arr.every(elem => typeof elem === 'string');
}

function isNumber(arr: ParamType): arr is number[] {
  return arr.every(elem => typeof elem === 'number');
}

function compareNumbersMinMax(a: any, b: any): number {
  return a - b;
}

function compareNumbersMaxMin(a: any, b: any): number {
  return b - a;
}

function compare(a: any, b: any): any {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function filterArray<T>(array: T[], condition: string): T[] | undefined {
  // const res = array.reduce((accum: any, item: any) => (accum < item ? accum : (accum = item)));
  let res;

  if (condition === 'MinMax') {
    res = array.sort(compare);
  }
  if (condition === 'MaxMin') {
    res = array.sort(compare).reverse();
  }

  return res;
}

const arr = [40, 10, 20, 35];
console.log(filterArray(arr, 'MinMax'));
console.log(filterArray(arr, 'MaxMin'));

const fruit = ['г', 'б', 'а', 'в'];

// console.log(filterArray(fruit, 'MinMax'));
// console.log(filterArray(fruit, 'MaxMin'));

console.log(isString(fruit));
console.log(isNumber(fruit));

// let res2 = fruit.forEach(element => {
//   element;
// });

// console.log(res2);

// Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

// Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has.
// Обмежте ключі тільки валідними типами для об'єкта
