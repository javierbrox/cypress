import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`check tasks`, () => {
    cy.url().should('include', '/tasks')
    cy.get('#mat-select-8 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
    cy.contains('Error técnico').click()
    cy.screenshot('my-screenshot-tasks', {
        capture: 'viewport',
        blackout: ['form'],
    })
    cy.get('.buttons-list > .mat-primary').click() // es necesario clickar en la lupa para hacer la busqueda
    //cy.get('.container-fluid > div.row').should('have.lenght', 10)
    
    // go to catalog
    cy.get('#mat-button-toggle-3-button > .mat-button-toggle-label-content').click()

})