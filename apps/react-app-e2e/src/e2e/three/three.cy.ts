describe('react-app: Three component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=three--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Three!');
    });
});
