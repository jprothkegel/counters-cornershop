describe('Share counter', () => {
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

  it('Mobile: share counter', () => {
    cy.setViewportSM();
    cy.get('[data-cy=selectBox]').eq(0).click();
    cy.get('[data-cy=shareButton]').click();
    cy.get('[data-cy=copyButton]').click();
    cy.get('[data-cy=alert]').should('be.visible');
  });

  it('Desktop: share counter', () => {
    cy.setViewportXL();
    cy.get('[data-cy=selectBox]').eq(0).click();
    cy.get('[data-cy=shareButton]').click();
    cy.get('[data-cy=copyButton]').click();
    cy.get('[data-cy=alert]').should('be.visible');
  });
});
