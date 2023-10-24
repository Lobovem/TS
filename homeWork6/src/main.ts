// Створіть класи Circle,Rectangle,Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
interface IUtills {
  color: string;
  name: string;
  calculateArea(base1: number, base2: number): number;
}

abstract class Utills implements IUtills {
  public calculateArea(base1: number, base2: number) {
    return base1 * base2;
  }

  constructor(public readonly color: string, public readonly name: string) {}
}

//круг
class Circle extends Utills {
  override calculateArea(r: number): number {
    return 3.14 * (r * r);
  }
}

//Прямоугольник
class Rectangle extends Utills {}

//Квадрат
class Square extends Utills {
  public calculateArea(base1: number): number {
    return base1 * base1;
  }
  print(): string {
    return 'S = base*2';
  }
}

//Треугольник
class Triangle extends Utills {
  public calculateArea(base: number, hight: number): number {
    return (base * hight) / 2;
  }

  print(): string {
    return 'S = (base * hight) / 2';
  }
}

const circle = new Circle('white', 'circle');
const rectangle = new Rectangle('white', 'rectangle');
const square = new Square('Green', 'Square');
const triangle = new Triangle('black', 'Triangle');

console.log(circle.calculateArea(10));
console.log(rectangle.calculateArea(20, 20));
console.log(square.calculateArea(10));
console.log(triangle.calculateArea(10, 20));

console.log(square.print());
console.log(triangle.print());
