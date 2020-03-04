import modal from '../selectors/modal'
import selectors from '../selectors/selectors'

Cypress.Commands.add("getByDataHook", (datahook) => {
  cy.get(`[data-hook*=${datahook}]`)
})

Cypress.Commands.add("clickByDataHook", (datahook) => {
  cy.get(`[data-hook*=${datahook}]`).click()
})

Cypress.Commands.add("clickButtonByText", (text) => {
  cy.get('a, button').contains(text).click()
})

Cypress.Commands.add("selectLiElement", (element) => {
  cy.get('li').eq(element - 1).click()
})

Cypress.Commands.add("typeTextByTag", (tag, tagId) => {
  cy.get(`[${tag}*=${tagId}]`)
})

Cypress.Commands.add("modalIsReady", (modalName) => {
  cy.get(modal[modalName], { timeout: 3000 }).should('be.visible')
})

Cypress.Commands.add("inputIsPresent", (inputName) => {
  cy.get(selectors.input[inputName], { timeout: 3000 }).should('be.visible')
})

