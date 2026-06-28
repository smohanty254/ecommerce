describe('Jest setup', () => {
  it('loads the jsdom environment and jest-dom matchers', () => {
    document.body.innerHTML = '<div data-testid="root">hello</div>';

    expect(document.body).toBeInTheDocument();
    expect(document.body.querySelector('[data-testid="root"]')).toHaveTextContent('hello');
  });
});
