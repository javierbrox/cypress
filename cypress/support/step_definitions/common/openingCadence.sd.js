import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://cadence-ui.private.sta.k8s.masmovil.com/domain/provision-domain/workflows?range=last-30-days&status=CLOSED";
//const url= "https://cadence-ui.private.dev.k8s.masmovil.com/domain/provision-domain/workflows?range=last-30-days&status=CLOSED" //dev


Given(`I open Cadence page`, () => {
  cy.log(
    "Opening Cadence web"
  );
  cy.visit(url);
});
