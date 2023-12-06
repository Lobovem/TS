
import {
  Animal
    
} from '../src/index';

describe('Animal', () => {
  test('should return correct information about the animal', () => {
    const fox = new Animal('Fox', 'Alice', 3, 'Healthy', 150);
  
    expect(fox.getSpecies()).toBe('Fox');
    expect(fox.getName()).toBe('Alice');
    expect(fox.getAge()).toBe(3);
    expect(fox.getHealth()).toBe('Healthy');
    expect(fox.getFoodExpense()).toBe(150);
  });
});