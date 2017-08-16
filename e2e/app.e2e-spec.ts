import { QuestionairePage } from './app.po';

describe('questionaire App', () => {
  let page: QuestionairePage;

  beforeEach(() => {
    page = new QuestionairePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
