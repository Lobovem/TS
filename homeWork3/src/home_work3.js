"use strict";
const BUDGET_ZERO_VALUE = 0;
var AreaEnum;
(function (AreaEnum) {
    AreaEnum["FRONT"] = "Front";
    AreaEnum["BACK"] = "Back";
    AreaEnum["HR"] = "HR";
})(AreaEnum || (AreaEnum = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["ACTIVE"] = "Active";
    StatusEnum["INACTIVE"] = "InActive";
    StatusEnum["PENDING"] = "Pending";
})(StatusEnum || (StatusEnum = {}));
// У вас є сутність - Компанія, яка має назву, список департаментів, список попередньо найнятого персоналу,
// а також список усього персоналу компанії - співробітники всіх департаментів і попередньо найняті.
class Company {
    name = 'HomeCompany';
    department = [];
    preHireEmployees = [];
    _staff = [];
    get staff() {
        // const employee = this.department.flatMap(x => x.employees) //why used spred?
        // const preHireEmployees = this.preHireEmployees;
        // const res = [...employee, ...preHireEmployees]
        // return res
        //flatMap - delete matrix on one level to up
        return [...this.department.flatMap(x => x.employees), ...this.preHireEmployees]; //why used spred?
    }
    addDepartment(depart) {
        this.department.push(depart);
    }
    addPreHideEmployees(preHireEmployees) {
        this.preHireEmployees.push(preHireEmployees);
    }
}
// Сутність Департамент - має назву, доменну область, список своїх співробітників і бюджет, що складається з дебіту і кредиту.
// Так само у неї існують методи для обчислення балансу виходячи з поточного бюджету, додавання нових співробітників,
// який враховує зміни балансу і перетворення з Попередньо найнятого на Співробітника або видалення Співробітника з
// минулого відділу.
class Department {
    name;
    area;
    employees = [];
    budget = {
        debit: BUDGET_ZERO_VALUE,
        credit: BUDGET_ZERO_VALUE,
    };
    get balance() {
        return this.budget.debit - this.budget.credit;
    }
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
    //где поиск работника в другом департаменте?
    // addEmployee(newcomer: Employee | PreHideEmployees, paymentInfo: PaymentInfo): void {
    addEmployee(newcomer) {
        if (newcomer instanceof Employee) {
            newcomer.department = this;
            this.employees.push(newcomer);
        }
        else {
            const employee = new Employee(newcomer.firstName, newcomer.lastName, newcomer.salary, newcomer.paymentInfo);
            employee.department = this;
            this.employees.push(employee);
        }
        this.budget.credit -= newcomer.salary;
    }
    removeEmployee(employee) {
        // if (employee) {
        //   const index = this.employees.indexOf(employee)
        //   this.employees.splice(index, 1)
        // }
        // debugger
        this.employees = this.employees.filter(elem => elem !== employee);
        this.budget.credit += employee.salary;
    }
}
// Сутність Попередньо найнятого співробітника має ім'я, прізвище та номер банківського рахунку.
class PreHideEmployees {
    firstName;
    lastName;
    paymentInfo;
    salary;
    constructor(firstName, lastName, salary, paymentInfo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.paymentInfo = paymentInfo;
        this.salary = salary;
    }
}
// Сутність Співробітника - ім'я, прізвище, платіжну інформацію, зарплату, статус (активний, неактивний, у неоплачуваній відпустці) 
// і знання про департамент,
// до якого він прикріплений.
class Employee {
    // Not necessary (не обязательно) set type to status, when it assigned (присваивается) value from enum
    status = StatusEnum.PENDING;
    department = null;
    firstName;
    lastName;
    salary;
    paymentInfo;
    setStatus(status) {
        this.status = status;
    }
    constructor(firstName, lastName, salary, paymentInfo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.paymentInfo = paymentInfo;
    }
}
// Так само у нас є сутність Бухгалтерія, яка є департаментом і має властивість баланс, а також методи
// для взяття на баланс співробітника або департаменту, зняття з балансу і виплати зарплати для всього персоналу.
// Попередньо найняті співробітники отримують зарплату за допомогою зовнішніх оплат, Співробітники (тільки активні) - за допомогою внутрішніх.
class Accounting extends Department {
    constructor(name, area) {
        super(name, area);
    }
    salaryBalance = [];
    addPersonalToBalance(entity) {
        DopFunc.isDepartment(entity) ? this.salaryBalance.push(...entity.employees) : this.salaryBalance.push(entity);
    }
    removePersonalFromBalance(entity) {
    }
    // salaryPayment(): void {
    //   for (const entity of this.salaryBalance) {
    //     if (DopFunc.isPreHireEmployees(entity)) {
    //       this.externalPayment(entity)
    //     }
    //     else {
    //       if (entity.status !== StatusEnum.ACTIVE) {
    //         continue
    //       }
    //       this.internalPayment(entity);
    //     }
    //   }
    // }
    //inside
    internalPayment(employee) { }
    //outside
    externalPayment(preHireEmployees) { }
}
class DopFunc {
    //check out is entity of Employee?
    static isEmployee(entity) {
        //сужение типов
        return entity instanceof Employee;
    }
    //check out is entity of PreHideEmployees?
    static isPreHireEmployees(entity) {
        //сужение типов
        return entity instanceof PreHideEmployees;
    }
    static isDepartment(entity) {
        //сужение типов
        return entity instanceof Department;
    }
}
const HomeCompany = new Company();
const LobovEmlpoyee = new Employee("Лобов", "Евгений", 1000, { iban: "IbanNumber", swift: 12345 });
const ValyaPreHireEmployee = new PreHideEmployees("Lena", "Lobova", 500, { iban: "IbanNumber", swift: 9876 });
const LenaPreHireEmployee = new PreHideEmployees("Lenok", "Tishenko", 800, { iban: "IbanNumber", swift: 7676 });
const OlegPreHireEmployee = new PreHideEmployees("Oleg", "Tishenko", 900, { iban: "IbanNumber", swift: 2333 });
const DepartmentFront = new Department("Front", AreaEnum.FRONT);
const DepartmentBack = new Department("Back", AreaEnum.BACK);
DepartmentFront.addEmployee(LobovEmlpoyee);
DepartmentFront.addEmployee(ValyaPreHireEmployee);
DepartmentFront.addEmployee(LenaPreHireEmployee);
DepartmentBack.addEmployee(LobovEmlpoyee);
DepartmentBack.addEmployee(OlegPreHireEmployee);
console.log("DepartmentFront ====>", DepartmentFront);
console.log("LobovEmlpoyee ====>", LobovEmlpoyee);
console.log("ValyaPreHireEmployee ====>", ValyaPreHireEmployee);
HomeCompany.addDepartment(DepartmentFront);
HomeCompany.addPreHideEmployees(ValyaPreHireEmployee);
console.log("HomeCompany ====>", HomeCompany);
console.log(DepartmentBack);
console.log("DepartmentFront before delete", DepartmentFront.employees);
DepartmentFront.removeEmployee(LobovEmlpoyee);
console.log("DepartmentFront after delete", DepartmentFront.employees);
