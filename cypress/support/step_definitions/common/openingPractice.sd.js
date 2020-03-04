import { Given } from "cypress-cucumber-preprocessor/steps";

const url="http://automationpractice.com/index.php"


Given(`I open Practice page`, () => {
  cy.log(
    "Opening Automationpractice web"
  );
  cy.visit(url);
});
