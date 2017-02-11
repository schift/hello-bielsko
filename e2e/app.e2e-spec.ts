import { HelloBielskoPage } from './app.po';

describe('hello-bielsko App', function() {
  let page: HelloBielskoPage;

  beforeEach(() => {
    page = new HelloBielskoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
