describe('My First Test', () => {
  it('Visits the about page', () => {
    cy.visit('/about')

    cy.get('h1')
      .contains('STEM at BCC')
  })
})