"use strict";
const arr = ['one', 'two', 'three', 1, 2, true, false, 'four'];
//it is more stick mode
function isString(elem) {
    // function isString(elem: unknown): elem is String  {
    return typeof elem === 'string';
}
function isNumber(elem) {
    // function isNumber(elem: unknown): elem is Number {
    return typeof elem === 'number';
}
function sortOnlyString(elem) {
    return elem.filter((el) => isString(el));
}
const res = sortOnlyString(arr);
// console.log(res);
// У вас є об'єкт, який може містити довільні властивості. Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з
// властивостей, якщо воно існує і має певний тип.
const obj = { color: 'red', numb: 10, name: 'Evgen', count: 1987, bool: true };
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
function isObjValueStr(object) {
    const res = [];
    for (const key in object) {
        if (object.hasOwnProperty(key) && isString(object[key])) {
            // push to arr value of key
            res.push(object[key]);
        }
    }
    return res;
}
// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип).
function hasOwnProperty(object, props) {
    for (const key in object) {
        if (object.hasOwnProperty && object[key] === props)
            return true;
    }
    return false;
}
function hasOwnPropertyType(object, props) {
    for (const key in object) {
        if (object.hasOwnProperty && object[key] === props) {
            return typeof object[key];
        }
    }
    return '';
}
function hasOwnPropertyTypeString(object) {
    for (const key in object) {
        if (object.hasOwnProperty && typeof object[key] === 'string') {
            return true;
        }
    }
    return false;
}
function hasOwnPropertyTypeNumber(object) {
    for (const key in object) {
        if (object.hasOwnProperty && typeof object[key] === 'number') {
            return true;
        }
    }
    return false;
}
// console.log(hasOwnProperty(obj, 'Evgen'));
// console.log(hasOwnPropertyType(obj, 1987));
// Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
const objStr = { one: 'один', two: 'два' };
const objNum = { one: 1, two: 2 };
function objectIsNumberType(obj, props) {
    if (hasOwnPropertyTypeNumber(obj) && hasOwnProperty(obj, props)) {
        return true;
    }
    return false;
}
function objectIsStringrType(obj, props) {
    if (hasOwnPropertyTypeString(obj) && hasOwnProperty(obj, props)) {
        return true;
    }
    return false;
}
// console.log(objectIsNumberType(objStr, 'один'));
console.log(objectIsNumberType(objNum, 2));
console.log(objectIsStringrType(objStr, "один"));
// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). Напишіть функцію, яка приймає цю змінну і виконує
// довільні операції, специфічні для кожного з типів.
const str = 'Hello';
const num1 = 1;
function cancat(a) {
    if (isString(a)) {
        return a + ' ' + 'world';
    }
    return "Variable isn't string";
}
function sumAll(a) {
    if (isNumber(a)) {
        return a + 10;
    }
    return "Variable isn't number";
}
// console.log(cancat(str));
// console.log(sumAll(num1));
// Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію, яка використовує цей гард для звуження
// типу змінної і викликає передану функцію, якщо вона існує.
function isFunction(elem) {
    return typeof elem === 'function';
}
const sum = function (a, b) {
    return a + b;
};
const demo = 123;
function suma(func) {
    if (isFunction(func)) {
        return func(4, 2);
    }
    return 'Is not function';
}
// Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються
// на цій ієрархії.
class Dog {
}
class Cat {
}
