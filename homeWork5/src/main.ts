// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор. Калькулятор повинен мати
// методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення. Потім створіть функцію
// calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.

interface ICalc {
  plus(num1: number, num2: number): number;
  minus(num1: number, num2: number): number;
  multiplication(num1: number, num2: number): number;
  division(num1: number, num2: number): number;
}

const objCalc: ICalc = {
  plus(num1, num2) {
    return num1 + num2;
  },
  minus(num1, num2) {
    return num1 - num2;
  },
  multiplication(num1, num2) {
    return num1 * num2;
  },
  division(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    }
    throw new Error('Whoops! E');
  },
};

// function calculate(obj: ICalc, num1: number, metod: string, num2: number): number {
//   if (metod === '+') {
//     return obj.plus(num1, num2);
//   }
//   if (metod === '-') {
//     return obj.minus(num1, num2);
//   }
//   if (metod === '*') {
//     return obj.multiplication(num1, num2);
//   }
//   if (metod === '/') {
//     return obj.division(num1, num2);
//   }
//   return 0;
// }

function calculate(obj: ICalc, num1: number, metod: string, num2: number): number {
  switch (metod) {
    case '+':
      return obj.plus(num1, num2);

    case '-':
      return obj.minus(num1, num2);

    case '*':
      return obj.multiplication(num1, num2);

    case '/':
      return obj.division(num1, num2);

    default:
      throw new Error('Invalid operation');
  }
}

console.log(calculate(objCalc, 2, '*', 2));

// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги. Створіть інтерфейси Book,
// Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про
// книжки та авторів. Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для
// отримання інформації про книги та авторів.

interface IBook {
  name: string;
  relice: number;
}

interface IAuthor {
  authorName: string;
  bithPlace: string;
}

interface IBookService {
  searchBook(bookName: string): IBook[];
  searchAuthor(authorName: string): IAuthor[];
}

const books: (IBook & IAuthor)[] = [
  { name: 'Bible', relice: 3500, authorName: 'God', bithPlace: 'Sky' },
  { name: 'Holy', relice: 3500, authorName: 'God', bithPlace: 'Sky' },
  { name: 'About God', relice: 4500, authorName: 'Holy ', bithPlace: 'Sky' },
  { name: 'About human', relice: 6500, authorName: 'Plet', bithPlace: 'Sky' },
];

const bookService: IBookService = {
  searchBook(bookName: string) {
    return books.filter((el) => el.name.toLowerCase() === bookName.toLowerCase());
  },
  searchAuthor(authorName: string) {
    return books.filter((el) => el.authorName.toLowerCase() === authorName.toLowerCase());
  },
};

console.log(bookService.searchBook('Bible'));
console.log(bookService.searchAuthor('God'));
