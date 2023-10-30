// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.
type ParamType = (number | string | boolean | object | Function | symbol | undefined)[];

//check out elements of array that it is string
function isString(arr: ParamType): arr is string[] {
  return arr.every(elem => typeof elem === 'string');
}

//check out elements of array that it is number
function isNumber(arr: ParamType): arr is number[] {
  return arr.every(elem => typeof elem === 'number');
}

function compareNumbersMinMax(a: number, b: number): number {
  return a - b;
}

function compareNumbersMaxMin(a: number, b: number): number {
  return b - a;
}

function compareString(a: string, b: string): number {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function filterArray<T extends ParamType>(array: T, condition: string): T | undefined {
  //sort to new array
  if (condition === 'MinMax' && isString(array)) {
    return [...array.sort(compareString)] as T;
  }
  if (condition === 'MaxMin' && isString(array)) {
    return [...array.sort(compareString).reverse()] as T;
  }

  if (condition === 'MinMax' && isNumber(array)) {
    return [...array.sort(compareNumbersMinMax)] as T;
  }
  if (condition === 'MaxMin' && isNumber(array)) {
    return [...array.sort(compareNumbersMaxMin).reverse()] as T;
  }

  //sort current array

  // if (condition === 'MinMax' && isString(array)) {
  //   return array.sort(compare);
  // }
  // if (condition === 'MaxMin' && isString(array)) {
  //   return array.sort(compare).reverse();
  // }

  // if (condition === 'MinMax' && isNumber(array)) {
  //   return array.sort(compare);
  // }
  // if (condition === 'MaxMin' && isNumber(array)) {
  //   return array.sort(compare).reverse();
  // }
  return undefined;
}

const arr = [40, 10, 20, 35];
const fruit = ['г', 'б', 'а', 'в'];

console.log(filterArray(arr, 'MinMax'));
console.log(filterArray(arr, 'MaxMin'));

console.log(filterArray(fruit, 'MinMax'));
console.log(filterArray(fruit, 'MaxMin'));
console.log('=============================================');

// function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
//   return array.filter((element) => condition(element));
// }

// Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

class Stack<T, U> {
  array: (T | U)[] = [];
  push(elem: T | U): void {
    this.array.push(elem);
  }

  // pop(): T | U | undefined {
  //   return this.array.pop();
  // }

  pop(): void {
    this.array.pop();
  }

  peek(): T | U {
    if (this.array.length === 0) {
      throw new Error('out of bounds');
    }
    return this.array[this.array.length - 1];
  }
}

const stack = new Stack<number, string>();
stack.push(111);
stack.push('222');
stack.push(333);
stack.pop();

console.log(stack.array);
console.log(stack.peek());

class User extends Stack<number, string> {}

const user = new User();
user.push(123);
user.push('321');
user.push(432);
user.pop();

console.log(user.array);
console.log(user.peek());

// Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has.
// Обмежте ключі тільки валідними типами для об'єкта

// class Dictionary<T, U> {
//   arr = new Map();
//   set(key: string, value: T | U): void {
//     this.arr.set(key, value);
//   }

//   get(key: string): T | U {
//     return this.arr.get(key);
//   }

//   has(key: string): boolean {
//     return this.arr.has(key);
//   }

//   delete(key: string): void {
//     this.arr.delete(key);
//   }

//   size(): U {
//     return this.arr.size as U;
//   }
// }

// const dictionary = new Dictionary<string, number>();
// dictionary.set('key1', 111);
// dictionary.set('key2', '222');
// dictionary.delete('key1');

// console.log(dictionary.get('key2'));
// console.log(dictionary.has('key2'));

// console.log(dictionary.arr);
// console.log(dictionary.size());

//Использование extends string в дженерике class Dictionary<T extends string, U> означает, что дженерик T должен быть
// подтипом (или точнее сказать, строкой или её подтипом) типа string. Это ограничение на тип T гарантирует, что ключи,
// которые вы используете для индексации вашего словаря, должны быть строками или подтипами строк.
class Dictionary<T, U> {
  private items: { [key: string]: T | U } = {};

  set(key: string, value: T | U): void {
    this.items[key] = value;
  }

  get(key: string): T | U | undefined {
    return this.items[key];
  }

  has(key: string): boolean {
    return key in this.items;
  }
}

const dictionary = new Dictionary<string, number>();
dictionary.set('key1', 111);
dictionary.set('key2', '222');

console.log(dictionary.get('key1'));
console.log(dictionary.has('key2'));
