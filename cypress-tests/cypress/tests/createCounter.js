describe('Create counter', () => {
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

  it('Mobile: Create counter with examples', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter',
      status: 200,
      response: 'fixture:create.json',
    });
    cy.setViewportSM();
    cy.get('[data-cy=addButton]').click();
    cy.get('[data-cy=examplesLink]').click();
    cy.get('[data-cy=examplesChip]').eq(3).click();
    cy.get('[data-cy=saveButton]').click();
    cy.contains('Pepsi');
  });

  it('Mobile: Create counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter',
      status: 200,
      response: 'fixture:create.json',
    });
    cy.setViewportSM();
    cy.get('[data-cy=addButton]').click();
    cy.get('[data-cy=createInput]').click().type('Pepsi');
    cy.get('[data-cy=saveButton]').click();
    cy.contains('Pepsi');
  });

  it('Mobile: Failed to create counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter',
      status: 500,
      response: {},
    });
    cy.setViewportSM();
    cy.get('[data-cy=addButton]').click();
    cy.get('[data-cy=createInput]').click().type('Pepsi');
    cy.get('[data-cy=saveButton]').click();
    cy.contains('The internet connection appears to be offline');
    cy.get('[data-cy=defaultDismissButton]').eq(0).click();
  });

  it('Desktop: Create counter with examples', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter',
      status: 200,
      response: 'fixture:create.json',
    });
    cy.setViewportXL();
    cy.get('[data-cy=addButton]').click();
    cy.get('[data-cy=examplesLink]').click();
    cy.get('[data-cy=examplesChip]').eq(3).click();
    cy.get('[data-cy=saveButton]').click();
    cy.contains('Pepsi');
  });

  it('Desktop: Create counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter',
      status: 200,
      response: 'fixture:create.json',
    });
    cy.setViewportXL();
    cy.get('[data-cy=addButton]').click();
    cy.get('[data-cy=createInput]').click().type('Pepsi');
    cy.get('[data-cy=saveButton]').click();
    cy.contains('Pepsi');
  });

  it('Desktop: Failed to create counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter',
      status: 500,
      response: {},
    });
    cy.setViewportXL();
    cy.get('[data-cy=addButton]').click();
    cy.get('[data-cy=createInput]').click().type('Pepsi');
    cy.get('[data-cy=saveButton]').click();
    cy.contains('The internet connection appears to be offline');
    cy.get('[data-cy=defaultDismissButton]').eq(0).click();
  });
});
