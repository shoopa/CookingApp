import { CookingAppPage } from './app.po';

describe('cooking-app App', () => {
  let page: CookingAppPage;

  beforeEach(() => {
    page = new CookingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
