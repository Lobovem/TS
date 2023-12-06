import {
  AdultTicket,
  ChildTicket,
  FamilyTicket,
  TicketFactory,
  TicketType
} from '../src/index';


describe('Ticket Classes', () => {
  test('AdultTicket should return correct cost', () => {
    const adultTicket = new AdultTicket(20);
    expect(adultTicket.getCost()).toBe(20);
  });
    
  test('ChildTicket should return correct cost', () => {
    const childTicket = new ChildTicket(10);
    expect(childTicket.getCost()).toBe(10);
  });
    
  test('FamilyTicket should return correct cost', () => {
    const familyTicket = new FamilyTicket(50);
    expect(familyTicket.getCost()).toBe(50);
  });
    
  test('TicketFactory should create AdultTicket', () => {
    const ticketFactory = new TicketFactory();
    const adultTicket = ticketFactory.createTicket('adult', 20);
    expect(adultTicket instanceof AdultTicket).toBe(true);
  });
    
  test('TicketFactory should throw error for invalid ticket type', () => {
    const ticketFactory = new TicketFactory();
    expect(() => ticketFactory.createTicket('invalid' as TicketType, 20)).toThrow('Invalid ticket type');
  });
});