import { NgYotubePage } from './app.po';

describe('ng-yotube App', function() {
  let page: NgYotubePage;

  beforeEach(() => {
    page = new NgYotubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
