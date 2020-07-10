import { PmsClientPage } from './app.po';

describe('pms-client App', function() {
  let page: PmsClientPage;

  beforeEach(() => {
    page = new PmsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
