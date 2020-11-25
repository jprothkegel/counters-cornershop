describe('Incrementing and Decrementing Counters', () => {
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

  it('Mobile: should increment counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/inc',
      status: 200,
      response: 'fixture:increment.json',
    });
    cy.setViewportSM();
    cy.contains('Glasses of water');
    cy.get('[data-cy=incrementButton]').eq(0).click();
    cy.get('[data-cy=count]').eq(0).contains(2);
  });

  it('Mobile: should decrement counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/dec',
      status: 200,
      response: 'fixture:decrement.json',
    });
    cy.setViewportSM();
    cy.contains('Glasses of water');
    cy.get('[data-cy=decrementButton]').eq(0).click();
    cy.get('[data-cy=count]').eq(0).contains(0);
    cy.get('[data-cy=decrementButton]').eq(0).should('be.disabled');
  });

  it('Mobile: should fail when incrementing counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/inc',
      status: 500,
      response: {},
    });
    cy.setViewportSM();
    cy.get('[data-cy=incrementButton]').eq(0).click();
    cy.get('[data-cy=retryButton]').eq(0).click();
    cy.contains('The internet connection appears to be offline');
    cy.get('[data-cy=dismissButton]').eq(0).click();
  });

  it('Mobile: should fail when decrementing counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/dec',
      status: 500,
      response: {},
    });
    cy.setViewportSM();
    cy.get('[data-cy=decrementButton]').eq(0).click();
    cy.get('[data-cy=retryButton]').eq(0).click();
    cy.contains('The internet connection appears to be offline');
    cy.get('[data-cy=dismissButton]').eq(0).click();
  });

  it('Desktop: should increment counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/inc',
      status: 200,
      response: 'fixture:increment.json',
    });
    cy.setViewportXL();
    cy.contains('Glasses of water');
    cy.get('[data-cy=incrementButton]').eq(0).click();
    cy.get('[data-cy=count]').eq(0).contains(2);
  });

  it('Desktop: should decrement counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/dec',
      status: 200,
      response: 'fixture:decrement.json',
    });
    cy.setViewportXL();
    cy.contains('Glasses of water');
    cy.get('[data-cy=decrementButton]').eq(0).click();
    cy.get('[data-cy=count]').eq(0).contains(0);
    cy.get('[data-cy=decrementButton]').eq(0).should('be.disabled');
  });

  it('Desktop: should fail when incrementing counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/inc',
      status: 500,
      response: {},
    });
    cy.setViewportXL();
    cy.get('[data-cy=incrementButton]').eq(0).click();
    cy.contains('The internet connection appears to be offline');
  });

  it('Desktop: should fail when decrementing counter', () => {
    cy.server().route({
      method: 'POST',
      url: '**/counter/dec',
      status: 500,
      response: {},
    });
    cy.setViewportSM();
    cy.get('[data-cy=decrementButton]').eq(0).click();
    cy.get('[data-cy=retryButton]').eq(0).click();
    cy.contains('The internet connection appears to be offline');
    cy.get('[data-cy=dismissButton]').eq(0).click();
  });
});
