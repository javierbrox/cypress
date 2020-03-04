import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("click map icon button", () => {
  cy.clickByDataHook('coverage-modal-button')
})
