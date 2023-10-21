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

function calculate(obj: ICalc, num1: number, metod: string, num2: number): number {
  if (metod === '+') {
    return obj.plus(num1, num2);
  }
  if (metod === '-') {
    return obj.minus(num1, num2);
  }
  if (metod === '*') {
    return obj.multiplication(num1, num2);
  }
  if (metod === '/') {
    return obj.division(num1, num2);
  }
  return 0;
}

console.log(calculate(objCalc, 4, '/', 2));

// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги. Створіть інтерфейси Book,
// Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про
// книжки та авторів. Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для
// отримання інформації про книги та авторів.
