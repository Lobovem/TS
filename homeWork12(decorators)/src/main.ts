/*Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, 
через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.*/


// //It example use without "experimentalDecorators",
// interface ICar {
//   isStart(): boolean;
//   valueFuel:number
// }

// type Constructor<T = {}> = new (...args: any[]) => T;

// function NewFieldClass(val:number){

//   return function <T extends Constructor>(originalClass: T, context: ClassDecoratorContext<T>) {
//     if (context.kind !== 'class') throw new Error('class-only decorator');

//     class NewCar extends originalClass implements ICar {
//       public valueFuel = val;

//       isStart(): boolean {
//         return this.valueFuel === 100;
//       }
//     }

//     return NewCar;
//   }
// }

// function DeprecatedMethod<T, A extends any[], R>(
// originalMethod:(this:T, ...args:A)=>R, 
// context:ClassMethodDecoratorContext<T,(this:T, ...args:A)=>R>){

// if(context.kind !=="method") throw new Error ('method-only decorator')

// function replacedMethod(this:T, ...args:A):R{
//   console.log(`${String(context.name)} is deprecated and will be removed in a feature version `);

//   return originalMethod.apply(this, args)
// }
// return replacedMethod
// }

// function DeprecatedProperty<T,V>(originalProperty:undefined, context:ClassFieldDecoratorContext<T,V>){
// if(context.kind !=="field") throw new Error ("Field-only decorator" )

// function updatedProperty(this:T, originalProperty:V):V{
//   console.log(`${String(context.name)} is deprecated and will be removed in a feature version`);

//   return originalProperty
// }

// return updatedProperty
// }


// function MinMaxValue (min:number, max:number){
//   return function <T>(setterMethod:(value:number)=>void, context:ClassSetterDecoratorContext<T, number>){
//     if(context.kind!=="setter") throw new Error('Setter-only decorator')

//     function replacedMethod (this:T, value:number):void{
//       if(value>max) throw new Error (`Value can't be more then ${max}`);
//       if(value<min) throw new Error (`Value can't be less then ${min}`);

//       return setterMethod.apply(this, [value])

//     }
//     return replacedMethod

//     }
// }

// //In progress development
// // function MinLength<T,V>(minLength:number, context:ClassFieldDecoratorContext<T,V>){
// //   if(context.kind !=="field") throw new Error ("Field-only decorator" )

// //   function length(this:T, originalProperty:V){

// //     return minLength
// //   }

// //   return length
// // }

// //@NewFieldClass(1000) set new value of field

// @NewFieldClass(1000)
// class Car {
//   @DeprecatedProperty
//   public fuel = 10;
//   public val = '10';
//   private _bar = 0

//   @DeprecatedMethod
//   getValueFuel(): number {
//     return this.fuel;
//   }

//   @MinMaxValue(0,10)
//   set atm (value:number){
//     this._bar=value
//   }
// }

// const car = new Car() as Car & ICar;

// car.atm=100
// // console.log(car.isStart());
// // console.log(car.valueFuel);

// // console.log(car.getValueFuel());
// // console.log(car.fuel);



//It example use with "experimentalDecorators",
// interface ICar {
//   valueFuel: number
//   isStart(): boolean;
// }

// type Constructor<T = {}> = new (...args: any[]) => T;

// function NewClass(val: number) {
//   // function NewFieldClass(val:number, min=0, max=val){
//   return function <T extends Constructor>(originalClass: T): T {

//     class NewCar extends originalClass implements ICar {
//       public valueFuel = val;

//       isStart(): boolean {
//         return this.valueFuel === 100;
//       }
//     }

//     return NewCar;
//   }
// }

// function DeprecatedMethod<T, A extends any[], R>(
//   target: T,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor) {

//   const originalMethod = descriptor.value

//   descriptor.value = function (this: T, ...args: A): R {
//     console.log(`${String(propertyKey)} is deprecated and will be removed in a feature version `);
//     return originalMethod.apply(this, args)
//   }
// }

// function DeprecatedProperty<T extends {}>(
//   target: T, propertyKey: string | symbol): void | any {

//   let value: any
//   Object.defineProperty(target, propertyKey, {

//     get: function (): any {
//       console.log(`${String(propertyKey)} is deprecated and will be removed in a feature version`);
//       return value
//     },

//     set: function (val: any) {
//       console.log(`${String(propertyKey)} is deprecated and will be removed in a feature version`);
//       value = val;
//     },

//   })
// }


// function MinMaxValue(min: number, max: number) {
//   return function <T>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {

//     const originalMethod = descriptor.value

//     descriptor.set = function (this: T, value: number): void {
//       if (value > max) throw new Error(`Value can't be more then ${max}`);
//       if (value < min) throw new Error(`Value can't be less then ${min}`);

//       return originalMethod.apply(this, [value])
//     }
//   }
// }

// //In progress development
// // function MinLength<T,V>(minLength:number, context:ClassFieldDecoratorContext<T,V>){
// //   if(context.kind !=="field") throw new Error ("Field-only decorator" )

// //   function length(this:T, originalProperty:V){

// //     return minLength
// //   }

// //   return length
// // }

// //@NewFieldClass(1000) set new value of field

// @NewClass(100)
// class Car {
//   @DeprecatedProperty
//   public fuel = 10;
//   public val = '10';
//   private _bar = 0

//   @DeprecatedMethod
//   getValueFuel(): number {
//     return this.fuel;
//   }

//   @MinMaxValue(0, 10)
//   set atm(value: number) {
//     this._bar = value
//   }
// }

// const car = new Car() as Car & ICar;


// car.atm = 15
// console.log(car.isStart());
// console.log(car.valueFuel);
// console.log(car.getValueFuel());

// console.log(car.getValueFuel());
// console.log(car.fuel);


//old, legasy version. It example use with "experimentalDecorators",


// interface IName {
//   name: string
//   surname: string
//   email: string
// }
// /*Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, 
// через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.*/

// function DeprecatedMethod(reason: string, newMethod?: string) {
//   return function <T, A extends any[], R>(
//     target: T,
//     propertyKey: string | symbol,
//     descriptor: PropertyDescriptor) {

//     const originalMethod = descriptor.value

//     descriptor.value = function (this: T, ...args: A): R {
//       console.log(`${String(propertyKey)} is deprecated and will be removed in a feature version, because ${reason}`)
//       if (newMethod) {
//         console.log(` ${newMethod}`);

//       }
//       return originalMethod.apply(this, args)
//     }
//   }
// }

// /*Створіть декоратори MinLength, MaxLength та Email*/
// function MinLength(min: number) {
//   return function <T extends {}>(target: T, propertyKey: string | symbol): any | void {
//     let value: string

//     Object.defineProperty(target, propertyKey, {

//       get: function (): string {
//         return value
//       },

//       set: function (newValue: string): void {
//         if (newValue.length <= min) throw new Error(`${String(propertyKey)} can't be more less or ${min}`);
//         if (newValue.length > min)
//           value = newValue
//       },
//       enumerable: true,
//       configurable: true,
//     })
//   }
// }

// function MaxLength(max: number) {
//   return function <T>(target: T, propertyKey: string | symbol): void | any {
//     let value: string

//     Object.defineProperty(target, propertyKey, {
//       get: function (): string {
//         return value
//       },

//       set: function (NewValue: string): void {
//         if (NewValue.length >= max) throw new Error(`${String(propertyKey)} can't be more or ${max}`)
//         if (NewValue.length < max) {
//           value = NewValue
//         }
//       },
//       enumerable: true,
//       configurable: true,
//     })
//   }
// }

// function CheckEmail<T>(target: T, propertyKey: string | symbol) {
//   let value: string
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

//   Object.defineProperty(target, propertyKey, {
//     get: function (): string {
//       return value
//     },

//     set: function (NewValue: string): void {
//       if (emailRegex.test(NewValue) && !undefined && !"") {
//         value = NewValue

//       } else { throw new Error(`${String(propertyKey)} not valide`) }
//     },
//     enumerable: true,
//     configurable: true,
//   })
// }


// class Name implements IName {
//   @MinLength(1)
//   name: string
//   @MaxLength(15)
//   surname: string
//   @CheckEmail
//   email: string

//   constructor(name: string, surname: string, email: string) {
//     this.name = name
//     this.surname = surname
//     this.email = email
//   }


//   get currentName() {
//     return this.name
//   }
//   set newName(value: string) {
//     this.name = value
//   }

//   @DeprecatedMethod("it is old method", "use newSurname method")
//   newOldSurname(value: string) {
//     this.surname = value
//   }

//   newSurname(value: string) {
//     this.surname = value
//   }
// }

// const oleg = new Name("Evgeniy", "Lobov", "lobov@gmail.com")

// console.log(oleg.name);
// console.log(oleg.surname);
// console.log(oleg.email);

// oleg.newOldSurname("Tishenko")
// console.log(oleg.surname);


//new version. It example use without "experimentalDecorators",
interface IName {
  name: string
  surname: string
}

function DeprecatedMethod(reason: string, newMethod?: string) {
  return function <T, A extends any[], R>(
    originalMethod: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>) {

    if (context.kind !== "method") throw new Error('method-only decorator')

    function replacedMethod(this: T, ...args: A): R {
      console.log(`${String(context.name)} is deprecated and will be removed in a feature version, ${reason}`);
      if (newMethod) { console.log(`${newMethod}`) }

      return originalMethod.apply(this, args)
    }
    return replacedMethod
  }
}

function CheckEmail<T>(originalMethod: (value: string) => void, context: ClassSetterDecoratorContext<T>) {
  if (context.kind !== "setter") throw new Error('setter-only decorator')

  function replacedMethod(this: T, value: string): void {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!emailRegex.test(value)) throw new Error(`${String(context.name)} not valide`);

    return originalMethod.apply(this, [value])

  }
  return replacedMethod
}

function MinMaxLengthMethodValue(min: number, max: number) {
  return function <T>(originalMethod: (value: string) => void, context: ClassMethodDecoratorContext<T>) {
    if (context.kind !== "method") throw new Error('method-only decorator')

    function replacedMethod(this: T, value: string): void {
      if (value.length > max) throw new Error(`${String(context.name)} can't be more then ${max}`);
      if (value.length < min) throw new Error(`${String(context.name)} can't be less then ${min}`);

      return originalMethod.apply(this, [value])

    }
    return replacedMethod

  }
}

function DeprecatedProperty<T, V>(originalProperty: undefined, context: ClassFieldDecoratorContext<T, V>) {
  if (context.kind !== "field") throw new Error("Field-only decorator")

  function updatedProperty(this: T, originalProperty: V): V {
    console.log(`${String(context.name)} is deprecated and will be removed in a feature version`);

    return originalProperty
  }

  return updatedProperty
}


class Name implements IName {
  @DeprecatedProperty
  name: string
  surname: string
  private _email: string = ''
  private _IBAN: string

  constructor(name: string, surname: string, _IBAN: string) {
    this.name = name
    this.surname = surname
    this._IBAN = _IBAN
  }


  get currentName() {
    return this.name
  }
  set newName(value: string) {
    this.name = value
  }

  @DeprecatedMethod("it is old method", "use newSurname method")
  newOldSurname(value: string) {
    this.surname = value
  }

  newSurname(value: string) {
    this.surname = value
  }

  // @MinMaxLengthMethodValue(1, 5)
  newIBAN(value: string) {
    this._IBAN = value
  }

  @CheckEmail
  set email(value: string) {
    this._email = value
  }

  get email(): string {
    return this._email
  }
}

const oleg = new Name("Evgeniy", "Lobov", "12345")


oleg.newOldSurname("Tishenko")
console.log(oleg.surname);
// oleg.newIBAN("0123456")
oleg.newIBAN("012312")
oleg.email = "oleggmail.com"
console.log(oleg.email);





