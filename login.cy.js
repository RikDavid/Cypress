describe ('Login de usuarios', () => {
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com')

        cy.intercept('POST','https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })
    it('Verifica login de usuário inválido', () => {
        cy.login('asasas', 'asdasd');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        });
    })
    
    it.only('Verifica login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.wait('@stubPost');
        cy.contains('a', '(Logout)').should('be.visible');
    })
})