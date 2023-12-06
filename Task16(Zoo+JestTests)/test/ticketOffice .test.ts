import {
  TicketOffice, CurrentVisitors, AdvertisingDepartment, Revenue, Visitor, AdultTicket,Client 

} from '../src/index';

  
describe('TicketOffice', () => {
  let currentVisitors: CurrentVisitors;
  let advertisingDepartment: AdvertisingDepartment;
  let revenue: Revenue;
  let ticketOffice: TicketOffice;

  beforeEach(() => {
    currentVisitors = new CurrentVisitors();
    advertisingDepartment = new AdvertisingDepartment();
    revenue = new Revenue();
    ticketOffice = new TicketOffice(currentVisitors, advertisingDepartment, revenue);
  });

  test('should sell an adult ticket and add a visitor to current visitors', () => {
    const visitor = new Visitor('John Doe', 'john@example.com');
    const ticket = new AdultTicket(20);

    ticketOffice.sellTicket(visitor, ticket);

    expect(revenue['dailyRevenue'].length).toBe(1);
    expect(currentVisitors['observers'].length).toBe(1);
  });

  test('should add a client to the advertising department', () => {
    const client = new Client('Client Name', 'client@example.com');

    ticketOffice.addClient(client);

    expect(advertisingDepartment['clients'].length).toBe(1);
  });
});
  