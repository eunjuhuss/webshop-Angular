import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


   it('should display navbar', () => {
    page.navigateTo();
    expect(page.getNavElement()).toEqual('FILM');
  });

  it('should display not found', () => {
    page.navigateToRoute('/**');
    expect(page.getParagraphText()).toEqual('page-not-found works!');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
