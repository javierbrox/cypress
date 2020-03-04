import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`check basic options`, () => {
    
    cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click()
    cy.get('.workflow-status > dt'). contains('Status') // esto chequea algo de la pagina para ver que el paso anterior se ha hecho correctamente
    cy.wait(250)
    cy.get('.history').click()
    cy.get('.export'). contains('Export')
    cy.wait(250)
    cy.get('.compact').click()
    cy.get('.json').click()
    cy.get('.date-range-picker > .dropdown > .dropdown-toggle > .selected-tag')
    //cy.pageIsReady('https://cadence-ui.private.sta.k8s.masmovil.com/domain/provision-domain/workflows/NEW_171851_722608084/ace20041-af0f-485d-85e1-d308fe07e4bc/summary')
    // cy.get('#search_query_top').type('dress');
    
});

Then(`check failed requests`, () => {
    
     cy.get('.status > .dropdown-toggle > .open-indicator').click()
     
//     cy.get('.workflow-status > dt'). contains('Status') // esto chequea algo de la pagina para ver que el paso anterior se ha hecho correctamente
//     cy.wait(500)
//     cy.get('.history').click()
//     cy.get('.export'). contains('Export')
//     cy.wait(500)
//     cy.get('.compact').click()
//     cy.wait(500)
//     cy.get('.json').click()

 });


