import { FakeNewsAdminPage } from './app.po';

describe('fake-news-admin App', () => {
  let page: FakeNewsAdminPage;

  beforeEach(() => {
    page = new FakeNewsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
