import { OcrDataReadPage } from './app.po';

describe('ocr-data-read App', function() {
  let page: OcrDataReadPage;

  beforeEach(() => {
    page = new OcrDataReadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
