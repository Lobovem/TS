// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. Потім використовуйте її для звуження типу змінної.
// У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому
//  залишилися тільки рядки. Використовуйте захисника типу для цього завдання.
type ParamType = number | string | boolean | object | Function | symbol | undefined;

//it is more stick mode
function isString(elem: ParamType): elem is string {
  // function isString(elem: unknown): elem is String  {
  return typeof elem === 'string';
}

function isNumber(elem: ParamType): elem is number {
  // function isNumber(elem: unknown): elem is Number {
  return typeof elem === 'number';
}

function toStringTypeVariable(elem: ParamType): boolean {
  return isString(elem);
}

const stringOne = 'Lobov';
const numer = 123;

console.log(toStringTypeVariable(stringOne));
console.log(toStringTypeVariable(numer));

const arr: (string | number | boolean)[] = ['one', 'two', 'three', 1, 2, true, false, 'four', 'kira'];

function sortOnlyString(elem: (string | number | boolean)[]): string[] {
  // let res: string[] = [];
  // for (const iterator of elem) {
  //   if (isString(iterator)) res.push(iterator);
  // }
  let res: string[] = [];
  elem.forEach((el) => (isString(el) ? res.push(el) : el));
  return res;
}
const res = sortOnlyString(arr);
console.log(res);

// У вас є об'єкт, який може містити довільні властивості. Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з
// властивостей, якщо воно існує і має певний тип.
const obj: ParamType = { color: 'red', numb: 10, name: 'Evgen', count: 1987, bool: true };

// function isObjValueStr(objec: any) {
//   const res = []

//   for (const key in objec) {
//     if (Object.prototype.hasOwnProperty.call(objec, key)) {
//       const element = objec[key];
//       if (isString(element)) {
//         res.push(element)
//       }
//     }
//   }
//   return res
// }

function isObjValueStr(object: any): string[] {
  const res: string[] = [];

  for (const key in object) {
    if (object.hasOwnProperty(key) && isString(object[key])) {
      // push to arr value of key
      res.push(object[key]);
    }
  }
  return res;
}

// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип).
function hasOwnProperty(object: any, props: ParamType): boolean {
  for (const key in object) {
    if (object.hasOwnProperty && object[key] === props) return true;
  }

  return false;
}

function hasOwnPropertyType(object: any, props: ParamType) {
  for (const key in object) {
    if (object.hasOwnProperty && object[key] === props) {
      return typeof object[key];
    }
  }
  return '';
}

function hasOwnPropertyTypeString(object: any): boolean {
  for (const key in object) {
    if (object.hasOwnProperty && typeof object[key] === 'string') {
      return true;
    }
  }
  return false;
}

function hasOwnPropertyTypeNumber(object: any): boolean {
  for (const key in object) {
    if (object.hasOwnProperty && typeof object[key] === 'number') {
      return true;
    }
  }
  return false;
}

console.log(hasOwnProperty(obj, 'Evgen'));
console.log(hasOwnPropertyType(obj, 1987));

// Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.

const objStr = { one: 'один', two: 'два' };
const objNum = { one: 1, two: 2 };

function objectIsNumberType(obj: ParamType, props: ParamType): boolean {
  if (hasOwnPropertyTypeNumber(obj) && hasOwnProperty(obj, props)) {
    return true;
  }
  return false;
}

function objectIsStringrType(obj: ParamType, props: ParamType): boolean {
  if (hasOwnPropertyTypeString(obj) && hasOwnProperty(obj, props)) {
    return true;
  }
  return false;
}

// console.log(objectIsNumberType(objNum, 2));
// console.log(objectIsStringrType(objStr, 'один'));

// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). Напишіть функцію, яка приймає цю змінну і виконує
// довільні операції, специфічні для кожного з типів.

const str = 'Hello';
const num1 = 1;

function cancat(a: string): string {
  if (isString(a)) {
    return a + ' ' + 'world';
  }
  return "Variable isn't string";
}

function sumAll(a: number): number | string {
  if (isNumber(a)) {
    return a + 10;
  }
  return "Variable isn't number";
}

// console.log(cancat(str));
// console.log(sumAll(num1));

// Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію, яка використовує цей гард для звуження
// типу змінної і викликає передану функцію, якщо вона існує.

function isFunction(elem: ParamType): elem is Function {
  return typeof elem === 'function';
}

const sum: Function = function (a: number, b: number): number {
  return a + b;
};

const demo = 123;
function suma(func: ParamType): Function | String {
  if (isFunction(func)) {
    return func(14, 2);
  }
  return 'Is not function';
}

console.log(suma(sum));

// Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються
// на цій ієрархії.

// Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються
// на цій ієрархії.

// Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються
// на цій ієрархії.

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {}
class Cat extends Animal {}

const dog = new Dog('Dik');
const cat = new Cat('Milka');

console.log(dog);
console.log(cat);

function isDog(animal: Dog | Cat): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Dog | Cat): animal is Cat {
  return animal instanceof Cat;
}

function dogsType(animal: (Dog | Cat)[]): Dog[] {
  return animal.filter((elem: Dog | Cat) => isDog(elem));
}

function catsType(animal: (Dog | Cat)[]): Cat[] {
  return animal.filter((elem: Dog | Cat) => isCat(elem));
}

const animal: Animal[] = [new Dog('Jack'), new Cat('Kit'), new Dog('Back'), new Cat('Tity')];

const dogs = dogsType(animal);
const cats = catsType(animal);

console.log(dogs);
console.log(cats);
