import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavElement(){
    return element(by.css('nav a')).getText();
  }

  navigateToRoute(path:string) {
    return browser.get(path);
  }

  getParagraphText(){
    return element(by.css('p')).getText();
  }

}
