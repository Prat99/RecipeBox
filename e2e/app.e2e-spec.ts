import { MyrecipebookPage } from './app.po';

describe('myrecipebook App', () => {
  let page: MyrecipebookPage;

  beforeEach(() => {
    page = new MyrecipebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
