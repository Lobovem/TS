// У вас є сутність - Компанія, яка має назву, список департаментів, список попередньо найнятого персоналу,
// а також список усього персоналу компанії - співробітники всіх департаментів і попередньо найняті.

const BUDGET_ZERO_VALUE = 0;

enum AreaEnum {
  FRONT = 'Front',
  BACK = 'Back',
  HR = 'HR',
}

//TODO What is it?

type Budget = {
  debit: number;
  credit: number;
};

class Company {
  name: string = 'home';
  department: Department[] = [];
  preHireEmployees: PreHideEmployees[] = [];
  staff: (PreHideEmployees | Employee)[] = [];
}

// Сутність Департамент - має назву, доменну область, список своїх співробітників і бюджет, що складається з дебіту і кредиту.
// Так само у неї існують методи для обчислення балансу виходячи з поточного бюджету, додавання нових співробітників,
// який враховує зміни балансу і перетворення з Попередньо найнятого на Співробітника або видалення Співробітника з
// минулого відділу.

class Department {
  name: string;
  area: AreaEnum;
  employees: Employee[] = [];
  budget: Budget = {
    debit: BUDGET_ZERO_VALUE,
    credit: BUDGET_ZERO_VALUE,
  };

  get balance(): number {
    return this.budget.debit - this.budget.credit;
  }

  addEmployee(): void { }
  removeEmployee(): void { }

  constructor(name: string, area: AreaEnum) {
    this.name = name;
    this.area = area;
  }
}

// Сутність Попередньо найнятого співробітника має ім'я, прізвище та номер банківського рахунку.

class PreHideEmployees {
  firsName: string;
  lastName: string;
  salary: number;
  bankAccount: string;

  constructor(firsName: string, lastName: string, bankAccount: string, salary: number) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.salary = salary;
    this.bankAccount = bankAccount;
  }
}

// Сутність Співробітника - ім'я, прізвище, платіжну інформацію, зарплату, статус (активний, неактивний, у неоплачуваній відпустці) і знання про департамент,
// до якого він прикріплений.

class Employee {
  firsName: string;
  lastName: string;
  paymentInfo: { iban: string; swift: number };
  salary: number;
  status: string;
  department: Department;

  setStatus(): void { }

  constructor(firsName: string, lastName: string, paymentInfo: { iban: string; swift: number }, salary: number, status: string) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.paymentInfo = paymentInfo;
    this.salary = salary;
    this.status = status;
  }
}

// Так само у нас є сутність Бухгалтерія, яка є департаментом і має властивість баланс, а також методи
// для взяття на баланс співробітника або департаменту, зняття з балансу і виплати зарплати для всього персоналу.
// Попередньо найняті співробітники отримують зарплату за допомогою зовнішніх оплат, Співробітники (тільки активні) - за допомогою внутрішніх.

class Accounting extends Department {
  balance: any;

  addPersonalToBalance(): void { }
  removePersonalFromBalance(): void { }
  salaryPayment(): void { }
  //inside
  internalPayment(): void { }
  //outside
  externalPayment(): void { }
}

