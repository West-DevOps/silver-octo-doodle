import {Builder, Capabilities, By, WebElement} from 'selenium-webdriver';

const capabilities = Capabilities.chrome();
const driver = new Builder().withCapabilities(capabilities).build();

describe('Test BBC news website homepage', () => {
  driver.get('https://www.bbc.co.uk/news').then();

  it('Should be: Home - BBC News', async () => {
    expect(await driver.getTitle()).toBe('Home - BBC News');
  });

  it('Should have the header with id header-content', async () => {
    const loc = await driver.findElement(By.id('header-content'));
    expect(loc).toBeInstanceOf(WebElement);
  });

  afterAll(() => {
    driver.quit();
  })
});
