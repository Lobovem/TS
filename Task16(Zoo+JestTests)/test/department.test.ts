import { 
    Client,
    AdvertisingDepartment,    
   
} from '../src/index';



describe('AdvertisingDepartment', () => {

  let advertisingDepartment:AdvertisingDepartment
  let client:Client

  beforeEach(() => {
    advertisingDepartment = new AdvertisingDepartment();
    client = new Client('Jane Doe', 'jane@example.com');
  });
    
  test('addClient should add a client', () => {
    advertisingDepartment.addClient(client);
    expect(advertisingDepartment['clients']).toContain(client);
  });
    
  test('sendPromotions should send promotions to clients', () => {
    advertisingDepartment.addClient(client);
    const spyConsoleLog = jest.spyOn(console, 'log');
    advertisingDepartment.sendPromotions();
    expect(spyConsoleLog).toHaveBeenCalledWith(
      `Sending an advertising campaign to the client ${client.getName()} to the address ${client.getContactInfo()}`);
  });
});