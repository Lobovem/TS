// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції.
// Як параметр типу повинен обов'язково виступати функціональний тип.
type GetReturnType<T> = T extends (...ars: never[]) => infer Return ? Return : never;

//Parameters of type  is function
type TypeNum = GetReturnType<() => number>;
type TypeStr = GetReturnType<() => string>;

//example with some function
function getSum(a: number, b: number): number {
  return a + b;
}

//
type GetNumType = GetReturnType<typeof getSum>;
let numValue: GetNumType = getSum(10, 2);
let numValue2: GetNumType = getSum(2, 2);

// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним)
// та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру

// type GetType<T> = T extends (param: infer U) => infer Return ? Return : never
// type GetType<T> = T extends (param: infer U) => void ? U : T extends (param: infer U) => infer Return ? Return : never;
type GetType<T> = T extends (param: infer ParamType) => infer ReturnType ? [ReturnType, ParamType] : never;

function funcB(param: string): number {
  return +param;
}

type Cortage = GetType<typeof funcB>; //[number,string]
