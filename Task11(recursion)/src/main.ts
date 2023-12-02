/*Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково. 
Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним.
Але. Паліндром можна отримати як результат операцій над іншими числами. 
Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, 
але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. 
Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. 
Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... 
Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром,
і властивість steps — це число викликів до знаходження паліндрома. Для того, щоб перевірити себе використовуйте число 196.
Це так зване Lychrel number — число яке немає поліндрому*/
type PalindromRes = {
  result: number;
  steps: number;
};

const isPalindrom = (num: number, steps: number = 0): PalindromRes => {
  const reverceNumber = (num: number): number => {
    return +num.toString().split('').reverse().join('');
  };

  let sumNum: number = num + reverceNumber(num);

  if (sumNum === reverceNumber(sumNum)) {
    steps += 1;
    return { result: sumNum, steps: steps };
  } else {
    return isPalindrom(sumNum, steps + 1);
  }
};

//Example with while
// const isPalindrom = (num: number, steps: number = 0): PalindromRes => {
//   const reverceNumber = (num: number): number => {
//     return +num.toString().split('').reverse().join('');
//   };

//   let sumNum: number = num + reverceNumber(num);

//   while (!(sumNum === reverceNumber(sumNum))) {
//     return isPalindrom(sumNum, steps + 1);
//   }

//   steps += 1;
//   return { result: sumNum, steps: steps };
// };

// console.log(isPalindrom(96));
// console.log(isPalindrom(312));

/*Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки 
цього масиву. Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний 
масив [1, 2, 3], функція має повернути масив, що містить 
[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
*/

// const arr = [1, 2, 3];
// const arrAllRandom: number[][] = [];

// function randomElementArray() {
//   return Math.random() - 0.5;
// }

// function random(arr: number[]) {
//   //method slice creates a new array without modifying the original array
//   const res: number[] = arr.slice().sort(randomElementArray);
//   debugger;

//   if (!arrAllRandom.find(el => JSON.stringify(el) === JSON.stringify(res)) ? true : false) {
//     arrAllRandom.push(res);
//     random(arr);
//   }

//   return arrAllRandom;
// }

// console.log(random(arr));

function generatePermutations(arr: number[]): number[][] {
  const result: number[][] = [];

  debugger;

  function permute(currentArr: number[], remainingArr: number[]) {
    if (remainingArr.length === 0) {
      result.push(currentArr);
      return;
    }

    for (let i = 0; i < remainingArr.length; i++) {
      const nextArr = currentArr.concat(remainingArr[i]);
      const remaining = remainingArr.slice(0, i).concat(remainingArr.slice(i + 1));
      permute(nextArr, remaining);
    }
  }

  permute([], arr);
  return result;
}

const inputArray = [1, 2, 3];
const permutations = generatePermutations(inputArray);

console.log(permutations);
