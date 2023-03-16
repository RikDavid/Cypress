describe ('Teste inicial', () => {
    beforeEach(() => {
        cy.visit('http://www.alura.com.br')
    })
    it('Buscar curso', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome').
        should('contain', 'Formação Aprenda a programar em Java com Orientação a Objetos');
    })
})