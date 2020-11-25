describe('Delete counter', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server().route({
      method: 'GET',
      url: '**/counter',
      status: 200,
      response: 'fixture:countersFull.json',
    });
    cy.get('[data-cy=getStarted]').click();
  });

  it('Mobile: delete counter', () => {
    cy.server().route({
      method: 'DELETE',
      url: '**/counter',
      status: 200,
      response: 'fixture:delete.json',
    });
    cy.setViewportSM();
    cy.get('[data-cy=selectBox]').eq(0).click();
    cy.get('[data-cy=trashButton]').click();
    cy.get('[data-cy=deleteButton]').click();
  });

  it('Mobile: failed to delete counter', () => {
    cy.server().route({
      method: 'DELETE',
      url: '**/counter',
      status: 500,
      response: {},
    });
    cy.setViewportSM();
    cy.get('[data-cy=selectBox]').eq(0).click();
    cy.get('[data-cy=trashButton]').click();
    cy.get('[data-cy=deleteButton]').click();
    cy.contains('The internet connection appears to be offline.');
    cy.get('[data-cy=retryButton]').eq(0).click();
    cy.contains('The internet connection appears to be offline.');
    cy.get('[data-cy=dismissButton]').eq(0).click();
  });

  it('Desktop: delete counter', () => {
    cy.server().route({
      method: 'DELETE',
      url: '**/counter',
      status: 200,
      response: 'fixture:delete.json',
    });
    cy.setViewportXL();
    cy.get('[data-cy=selectBox]').eq(0).click();
    cy.get('[data-cy=trashButton]').click();
    cy.get('[data-cy=deleteButton]').click();
  });

  it('Desktop: failed to delete counter', () => {
    cy.server().route({
      method: 'DELETE',
      url: '**/counter',
      status: 500,
      response: {},
    });
    cy.setViewportXL();
    cy.get('[data-cy=selectBox]').eq(0).click();
    cy.get('[data-cy=trashButton]').click();
    cy.get('[data-cy=deleteButton]').click();
    cy.contains('The internet connection appears to be offline.');
    cy.get('[data-cy=retryButton]').eq(0).click();
    cy.contains('The internet connection appears to be offline.');
    cy.get('[data-cy=dismissButton]').eq(0).click();
  });
});
