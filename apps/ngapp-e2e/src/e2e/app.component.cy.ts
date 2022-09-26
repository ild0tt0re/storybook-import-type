describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('import-type-root').should('exist');
  });
});
