describe('react-app: Four component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=four--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Four!');
    });
});
