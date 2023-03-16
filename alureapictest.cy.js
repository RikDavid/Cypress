describe ('Login e registro de usuarios', () => {
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com')
    })
    it('Verifica mensagem de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Full name is required!').should('be.visible');
        cy.contains('small', 'User name is required!').should('be.visible');
        cy.contains('small', 'Password is required!').should('be.visible');
    })
    it('Verifica mensagem de e-mail inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('jaqueline');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Invalid e-mail').should('be.visible');
    })
    it('Verifica mensagem de número mínimo de caracteres de senha', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Mininum length is 8').should('be.visible');
    })
    it('Verifica mensagem de letra maíscula no username', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('Me');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Must be lower case').should('be.visible');
    })
})