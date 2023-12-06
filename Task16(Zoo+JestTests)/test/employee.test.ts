import {
  Employee
    
} from '../src/index';


describe('Employee Class', () => {
  test('should return correct information about of Employee', () => {
    const employee = new Employee('Alice', 'Zookeeper', 'alice@example.com', 3000);
    expect(employee).toBeInstanceOf(Employee);
    expect(employee.getName()).toBe('Alice');
    expect(employee.getPosition()).toBe('Zookeeper');
    expect(employee.getContactInfo()).toBe('alice@example.com');
    expect(employee.getSalary()).toBe(3000);
  });
  
});