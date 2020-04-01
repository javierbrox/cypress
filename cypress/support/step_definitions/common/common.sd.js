import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to {string}", (url) => {
  cy.visit(url)
  cy.get('#mat-button-toggle-4-button > .mat-button-toggle-label-content').click()
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




//AQUI EMPIEZAN LOS TETS NUEVOS QUE ESTOY HACIENDO

//TEST Search by WorkflowId with runId

When('I write {string} workflowId',  (workflowID) =>{
  cy.get('#mat-input-3').type(workflowID)

}); 

When('I write {string} runId', (RunId) =>{
  cy.get('#mat-input-4').type(RunId).type('{enter}')
  cy.get('#mat-input-3').click()

}); 

When('I click in "search" button', () => {
  cy.get(':nth-child(1) > .col-md-2 > .mat-primary').click()
  
})

Then('Workflow Id is shown with every data', () => {
  cy.wait(10000)
  cy.get('tbody.ng-tns-c37-19 > .row > :nth-child(1)').contains('LARA-BAJA-MIERCOLES-01')

})

//TEST Search by status

When('I click in "arrow status box" button', () =>{
  cy.get('.mat-select-placeholder').click()
  
 
}); 

Then('all status are shown', () =>{
  cy.get('.mat-option-text').contains('open')

}); 

When ('I select "status"', () =>{
  cy.get('.mat-option-text').click()

});

And ('I click in "search status" button', () =>{
  cy.get(':nth-child(2) > .col-md-2 > .mat-primary').click()

});