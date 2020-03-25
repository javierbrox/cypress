import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`check catalog`, () => {
    cy.url().should('include', '/catalog')

    cy.screenshot('my-screenshot-catalog', {
        capture: 'viewport',
        blackout: ['form'],
    })
    
    cy.get('#mat-expansion-panel-header-0 > .mat-expansion-indicator')
    cy.get('#mat-expansion-panel-header-0').trigger('mousedown').click()
    
    // go to workflow
    cy.get('#mat-button-toggle-4-button > .mat-button-toggle-label-content').click()
})