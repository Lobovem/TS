// Створіть класи Circle,Rectangle,Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
interface IUtills {
  readonly color: string;
  readonly name: string;
  calculateArea(): number;
}

abstract class Utills implements IUtills {
  abstract calculateArea(): number;

  constructor(public readonly color: string, public name: string) {
    this.color = color;
  }
}

//круг
class Circle extends Utills {
  constructor(color: string, name: string, public radius: number) {
    super(color, name);
  }

  calculateArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
}

//Прямоугольник
class Rectangle extends Utills {
  constructor(color: string, name: string, public side1: number, public side2: number) {
    super(color, name);
  }

  calculateArea(): number {
    return this.side1 * this.side2;
  }
}

//Квадрат
class Square extends Utills {
  constructor(color: string, name: string, public side1: number) {
    super(color, name);
  }

  calculateArea(): number {
    return this.side1 * this.side1;
  }

  print(): string {
    return 'S = base^2';
  }
}

//Треугольник
class Triangle extends Utills {
  constructor(color: string, name: string, public side1: number, public hight: number) {
    super(color, name);
  }

  calculateArea(): number {
    return (this.side1 * this.hight) / 2;
  }

  print(): string {
    return 'S = (side1 * hight) / 2';
  }
}

const circle = new Circle('white', 'circle', 10);
const rectangle = new Rectangle('white', 'rectangle', 10, 20);
const square = new Square('Green', 'Square', 10);
const triangle = new Triangle('black', 'Triangle', 10, 20);

console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
console.log(square.calculateArea());
console.log(triangle.calculateArea());

console.log(square.print());
console.log(triangle.print());
