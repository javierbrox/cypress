import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://bpm-frontend.private.sta.k8s.masmovil.com";
const url2 = "https://bpm-frontend.private.dev.k8s.masmovil.com"
const url3 = "https://bpm-frontend.private.dev.k8s.masmovil.com/provision/workflows" 

Given(`I open Bpm page`, () => {
  cy.log(
    "Opening Bpm web"
  );
  cy.visit('/');
});

