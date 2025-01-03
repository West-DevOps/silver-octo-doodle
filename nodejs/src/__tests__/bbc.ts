import { Builder, Capabilities, By } from 'selenium-webdriver';

const capabilities = Capabilities.chrome();
const driver = new Builder().withCapabilities(capabilities).build();

describe('Test BBC website title', () => {
  it('Should be: Home - BBC News', async () => {
    await driver.get('https://www.bbc.co.uk/news');
    expect(await driver.getTitle()).toBe('Home - BBC News');
  });

  afterAll(() => {
    driver.quit();
  })
});
