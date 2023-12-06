import {
  Administration, Employee, Animal
    
} from '../src/index';


describe('Administration', () => {
  let administration:Administration
  
  beforeEach(() => {
    administration = new Administration();
  });
  
  test('should add and remove employees', () => {
    const employee1 = new Employee('John Doe', 'Manager', 'john@example.com', 50000);
    const employee2 = new Employee('Jane Doe', 'Accountant', 'jane@example.com', 40000);
  
    administration.addEmployee(employee1);
    administration.addEmployee(employee2);
  
    expect(administration.getEmployees()).toHaveLength(2);
  
    administration.removeEmployee(employee1);
  
    expect(administration.getEmployees()).toHaveLength(1);
    expect(administration.getEmployees()).not.toContain(employee1);
  });
  
  test('should add and remove animals', () => {
    const giraffe = new Animal('Giraffe', 'Frad', 5, 'Healthy', 1000);
    const elephant = new Animal('Elephant', 'Vally', 10, 'Healthy', 2000);
  
    administration.addAnimal(giraffe);
    administration.addAnimal(elephant);
  
    expect(administration.getAnimals()).toHaveLength(2);
  
    administration.removeAnimal(giraffe);
  
    expect(administration.getAnimals()).toHaveLength(1);
    expect(administration.getAnimals()).not.toContain(giraffe);
  });
  
  test('should create promotions', () => {
    administration.createPromotions();
  
    expect(administration.getPromotions()).toHaveLength(1);
    expect(administration.getPromotions()).toContain('Discount on entrance tickets on weekends!');
  });
});