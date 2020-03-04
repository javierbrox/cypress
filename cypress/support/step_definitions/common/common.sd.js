import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("i navigate to {string}", (url) => {
  cy.visit(url)
})

Given("click {string} button", (text) => {
  cy.clickButtonByText(text)
})

Given("{string} modal is ready", (modalName) => {
  cy.modalIsReady(modalName)
})

Given("{string} page is ready", (pageName) => {
  cy.pageIsReady(pageName)
})

Given("{string} input is present", (inputName) => {
  cy.inputIsPresent(inputName)
})

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




