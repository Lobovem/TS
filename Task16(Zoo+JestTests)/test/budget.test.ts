
import {
  Budget,
} from '../src/index';


describe('Budget', () => {
  let budget:Budget

  beforeEach(() => {
    budget = new Budget(10000); 
  });

  test('initializes with the correct amount', () => {
    expect(budget.getAmount()).toBe(10000);
  });
    
  test('manageBudget should log a message based on budget status', () => {
    const spyConsoleLog = jest.spyOn(console, 'log');
    budget.updateAnimalCost(4000);
    budget.updateEmployeeSalary(5000);
    budget.manageBudget();
    expect(spyConsoleLog).toHaveBeenCalledWith('The budget is large enough to keep animals and pay employees.');
  });


  test('manageBudget should log a message indicating insufficient budget', () => {
    const spyConsoleLog = jest.spyOn(console, 'log');
    budget.updateAnimalCost(7000);
    budget.updateEmployeeSalary(4000);
    budget.manageBudget();
    expect(spyConsoleLog).toHaveBeenCalledWith('The budget is insufficient for keeping animals and paying employees.');
  });

  test('generateFinancialReports should log correct financial reports', () => {
    const spyConsoleLog = jest.spyOn(console, 'log');
    budget.generateFinancialReports();
      
    expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringContaining('Expenses for keeping animals'));
    expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringContaining('Salaries to employees'));
  });
      
});