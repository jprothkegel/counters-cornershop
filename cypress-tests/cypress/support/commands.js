import '@testing-library/cypress/add-commands';

Cypress.Commands.add('setViewportSM', () => {
  cy.viewport(360, 740);
});

Cypress.Commands.add('setViewportXL', () => {
  cy.viewport(1280, 800);
});
