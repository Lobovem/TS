
import {
  Accounting, Employee, Revenue, Animal 
 
   
} from '../src/index';



describe('Accounting', () => {
  let accounting: Accounting;
  
  beforeEach(() => {
    accounting = new Accounting();
  });
  
  test('should update revenue and calculate total revenue correctly', () => {
    const revenue = new Revenue();
    revenue.addToDailyRevenue('2023-01-01', 100);
  
    accounting.updateRevenue(100);
    accounting.updateRevenue(200);
  
    expect(accounting['totalRevenue']).toBe(300);
  });
  
  test('should add employees and calculate total expenses correctly', () => {
    const employee1 = new Employee('John Doe', 'Manager', 'john@example.com', 5000);
    const employee2 = new Employee('Jane Doe', 'Accountant', 'jane@example.com', 4000);
    const animal = new Animal ('Lion', 'Alex', 6, 'Healthy', 300)
  
    accounting.addEmployee(employee1);
    accounting.addEmployee(employee2);
    accounting.addAnimal(animal);
  
    expect(accounting.getEmployees().length).toBe(2);
    expect(accounting.getAnimals().length).toBe(1);

    const totalExpenses = employee1.getSalary() + employee2.getSalary() + animal.getFoodExpense();;
    const calculatedTotalExpenses = accounting['calculateTotalExpenses']();
    expect(calculatedTotalExpenses).toBe(totalExpenses);
  });
  
  test('should generate financial reports correctly', () => {
    const employee = new Employee('John Doe', 'Manager', 'john@example.com', 5000);
    const animal = new Animal ('Lion', 'Alex', 6, 'Healthy', 300)
    const revenue = new Revenue();
    revenue.addToDailyRevenue('2023-01-01', 100);
  
    accounting.addEmployee(employee);
    accounting.addAnimal(animal);
    accounting.updateRevenue(100);
  
    const consoleSpy = jest.spyOn(console, 'log');
    
    accounting.generateFinancialReports();
    expect(consoleSpy).toHaveBeenCalledWith(`Total profit: ${accounting.getTotalRevenue()}`);
    expect(consoleSpy).toHaveBeenCalledWith(`General expenses: ${accounting.calculateTotalExpenses()}`);
    expect(consoleSpy).toHaveBeenCalledWith(`Profit: ${accounting.getTotalRevenue() - accounting.calculateTotalExpenses()}`);
    
  });

});