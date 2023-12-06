
import {
    
    Revenue,
    Accounting
    
} from '../src/index';


describe('Revenue', () => {
    let revenue:Revenue

    beforeEach(() => {
        revenue = new Revenue();
    });

    test('addToDailyRevenue should add revenue data', () => {
      revenue.addToDailyRevenue('2023-11-11', 100);
      expect(revenue['dailyRevenue']).toContainEqual({ date: '2023-11-11', amount: 100 });
    });
  
    test('sendToAccounting should update total revenue in accounting', () => {
      const accounting = new Accounting();
      const spyUpdateRevenue = jest.spyOn(accounting, 'updateRevenue');
      revenue.addToDailyRevenue('2023-11-11', 100);
      revenue.sendToAccounting(accounting);
      expect(spyUpdateRevenue).toHaveBeenCalledWith(100);
    });
  });