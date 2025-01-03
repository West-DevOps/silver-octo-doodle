import {Builder, Capabilities, By} from 'selenium-webdriver';

const capabilities = Capabilities.chrome();
const driver = new Builder().withCapabilities(capabilities).build();

/**
 * This is a test 'suite', a group of logically related tests.
 */
describe('Test BBC news website homepage', () => {
  /**
   * This will be called once before all tests are ran, seeing as we only need to request the page once and then are
   * reading static elements off the page this is all we need to do.
   */
  beforeAll(async () => {
    await driver.get('https://www.bbc.co.uk/news');
  });

  /**
   * This is an actual 'test'
   */
  it('Should be: Home - BBC News', async () => {
    expect(await driver.getTitle()).toBe('Home - BBC News');
  });

  /**
   * This is also an individual test
   */
  it('The header should contain the sports', async () => {
    const header = await driver.findElement(By.id('header-content'));
    const headerText = await header.getText();
    expect(headerText).toContain('Sport');
  });

  /**
   * Close the browser down after all tests are done
   */
  afterAll(() => {
    driver.quit();
  })
});
