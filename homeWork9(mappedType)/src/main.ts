// MAPPED  types
// // Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
interface IUser {
  name: string;
  user1: {
    name: string;
    surname: string;
  };
  user2: {
    name: string;
    surname: string;
  };
}

//рекурсия для вложенных объектов
type DeepReadonly<T> = {
  //below examples
  // readonly [name in keyof IUser]?: <T[K] = string>;
  // readonly [user1 in keyof IUser]?: DeepReadonly<T[K] = user1>;
  // readonly [name in keyof user1]?: DeepReadonly<T[K] = string>;

  // readonly [K in keyof T]?: DeepReadonly<T[K]>;
  readonly [K in keyof T]?: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// const user: Readonly<IUser> = {
//   name: 'Jon',
//   surname: 'Rod',
// };

const userFirst: DeepReadonly<IUser> = {
  name: 'Test',
  user1: { name: 'Jon', surname: 'Rod' },
};

if (userFirst.user1) {
  userFirst.user1.name = '123';
}

userFirst.name = '222';
console.log(userFirst);

// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів
// та ще й робити їх обовʼязковими.
type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

const userSecond: DeepRequireReadonly<IUser> = {
  name: 'Test',
  user1: { name: 'Jon', surname: 'Rod' },
  user2: { name: 'Mark', surname: 'Kuk' },
};

userSecond.name = '000';
userSecond.user1.name = '9999';
console.log(userSecond);

// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
interface IUserSec {
  name: string;
  surname: string;
}

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

const user: UpperCaseKeys<IUserSec> = {
  NAME: 'Bob',
  SURNAME: 'Villi',
};
// const user = {
//   name: 'Bob',
//   surname: 'Villi',
// };

// type UpperCaseObj = UpperCaseKeys<typeof user>;

console.log(user);

// І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
interface IUserThird {
  name: string;
  surname: string;
}

// type ObjectToPropertyDescriptor<T> = {
//   [K in keyof T]: { value: T[K] };
// };

const userThird = {
  name: 'Rec',
  surname: 'Rec',
};

console.log(Object.getOwnPropertyDescriptor(userThird, 'name'));

// const obj = {};
// Object.defineProperty(obj, 'name', {
//   value: 'John',
//   writable: false, // Заборонити зміну значення
//   enumerable: true, // Дозволити перебір
//   configurable: false, // Заборонити зміну конфігурації
// });

// console.log(obj);
