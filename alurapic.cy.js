describe ('Usabilidade de tela inicial', () => {
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com')
    })
    
    it('Verifica mensagens de tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })
    it('Verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"').type('ricardo');
        cy.get('input[formcontrolname="password"').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })
    it('Verifica nome da aplicação na tela inicial', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible');
    })
    
})