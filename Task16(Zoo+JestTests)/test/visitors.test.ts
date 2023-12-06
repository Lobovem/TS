import {
    Visitor,
    CurrentVisitors,
   
} from '../src/index';




describe('CurrentVisitors', () => {

    let currentVisitors:CurrentVisitors
    let visitor:Visitor

    beforeEach(() => {
        currentVisitors = new CurrentVisitors();
        visitor = new Visitor('John Doe', 'john@example.com');
    });

    test('addVisitor should add a visitor', () => {
     currentVisitors.addVisitor(visitor);
     expect(currentVisitors['observers']).toContain(visitor);
    });
  
    test('notifyVisitorsBeforeClosing should notify visitors', () => {
     currentVisitors.addVisitor(visitor);
     const spyUpdate = jest.spyOn(visitor, 'update');
     currentVisitors.notifyVisitorsBeforeClosing();
     expect(spyUpdate).toHaveBeenCalledWith('The zoo closes in 15 minutes.');
    });
  
    test('notifyVisitorsBeforeLeaving should notify visitors', () => {
     currentVisitors.addVisitor(visitor);
     const spyUpdate = jest.spyOn(visitor, 'update');
     currentVisitors.notifyVisitorsBeforeLeaving();
     expect(spyUpdate).toHaveBeenCalledWith('The zoo will close now. Thank you for visiting!');
    });
});