// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення
// для кожного ключа може бути число | рядок.
interface IBase {
  [key: string]: string | number;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки,
// а значеннями — функції, які приймають будь-які аргументи.
type Fn = () => string;
interface IFn {
  [key: string]: Fn;
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі
// повинні бути числами, а значення - певного типу.
interface IObj {
  [key: number]: string | number | boolean;
}
const obj: IObj = {
  0: 10,
  1: true,
  2: '20',
  3: '30',
};

// console.log(obj[0]);

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості
// типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface ICustom {
  name: string;
  [key: string]: string | number;
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.

interface ICustom2 {
  [key: string]: string | number;
}
interface ISpecial extends ICustom2 {
  name: string;
  city: string;
}

const person: ISpecial = {
  name: 'Yevhen',
  city: 'Kharkov',
  age: 36,
};

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів
//  певним критеріям (наприклад, чи всі значення є числами).
interface ICustom3 {
  [key: string]: number | string;
}

const obj2: ICustom3 = {
  age: 36,
  birthday: 1987,
};

function isTypeNumber(elem: unknown): boolean {
  return typeof elem === 'number';
}

function isValuesTypeNumber(obj: ICustom3): boolean {
  //check out that object has keys. Else obj is empty then return false
  if (Object.keys(obj).length === 0) {
    return false;
  }

  //exemple 1
  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key) && !isTypeNumber(obj[key])) {
  //     return false;
  //   }
  // }
  // return true;

  //exemple 2
  //Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
  //Object.values(obj), щоб отримати масив усіх значень в об'єкті
  return Object.values(obj).every(value => isTypeNumber(value));
}

console.log(isValuesTypeNumber(obj2));
