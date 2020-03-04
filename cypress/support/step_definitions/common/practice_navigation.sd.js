import { Then, then } from "cypress-cucumber-preprocessor/steps";

Then(`open women section`, () => {
    
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]', {timeout: 20000}).click()
    cy.get('body').contains('tops') // esto chequea algo de la pagina para ver que el paso anterior se ha hecho correctamente

    //cy.pageIsReady('https://cadence-ui.private.sta.k8s.masmovil.com/domain/provision-domain/workflows/NEW_171851_722608084/ace20041-af0f-485d-85e1-d308fe07e4bc/summary')   
});

Then(`select by check`, () => {

    cy.get('.block_content > .tree > :nth-child(1) > .grower').click()
    cy.get('.block_content > .tree > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.wait(250)
    cy.get('#layered_id_attribute_group_1').check() //check size. It is only working with check-boxes(ticks)
    cy.get('#layered_id_feature_5', {timeout: 20000}).check() // check type

});

Then(`search something`, () => {

    cy.get('#search_query_top').type('dress')
    cy.get('#searchbox > .btn').click()
    cy.get('#columns').contains('Printed Summer Dress')
    cy.get(':nth-child(1) > .product-container > .right-block > h5 > .product-name').contains('Printed Summer Dress')
});



