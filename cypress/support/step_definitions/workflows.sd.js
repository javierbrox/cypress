import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`check workflows`, () => {
    cy.url().should('include', '/workflows')
    
    cy.screenshot('my-screenshot-workflows', {
        capture: 'viewport',
        blackout: ['form'],
    })
    
})