import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`check orders by status`, () => {
    
    cy.url().should('include', '/orders')
    cy.get('#mat-input-0').type('NIF-03037618P')
    cy.screenshot('my-screenshot-orders', {
        capture: 'fullPage',
    })
    cy.log('Se ha realizado una busqueda por NIF')
    cy.get('#mat-input-1').type('3/1/2020')
    cy.get('.mat-primary > .mat-button-wrapper > .mat-icon').click()  
    cy.log('Se ha realizado una busqueda por fecha')
    cy.get('#mat-input-0').clear()
    cy.get('#mat-input-1').clear()
    cy.log('Se limpian todas las cajas, para realizar busqueda por estado')
    cy.get('app-search-operation-box.col-md-1 > app-clear-filter > .clear-filter > div.col-md-12 > :nth-child(2) > .col-md-12 > .mat-form-field-wrapper').click()
    cy.wait(2500)
    cy.contains('BAJA').click()
    cy.get('.buttons-list > .mat-primary').click()

    // go to tasks
    cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content > span').click()

    //Intentos de buscar en un deplegable
    //cy.get('app-search-operation-box.col-md-1 > app-clear-filter > .clear-filter > div.col-md-12 > :nth-child(2) > .col-md-12 > .mat-form-field-wrapper').find('.mat-select-value-text > .ng-tns-c29-9').click()
    //cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click().contains('BAJA').click()
    //cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-arrow-wrapper').find('.mat-option-text > ALTA').click()
    //cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').find('#mat-option-13 > .mat-option-text > BAJA').click()
    //cy.get('app-search-operation-box.col-md-1').find('.mat-option-text > ALTA').click()
    //cy.get('.mat-select-value-text > .ng-tns-c29-5').select('CANCELLED')
    
});