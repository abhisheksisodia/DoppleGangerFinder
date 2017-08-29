import { DopplegangerFinderPage } from './app.po';

describe('doppleganger-finder App', () => {
  let page: DopplegangerFinderPage;

  beforeEach(() => {
    page = new DopplegangerFinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
