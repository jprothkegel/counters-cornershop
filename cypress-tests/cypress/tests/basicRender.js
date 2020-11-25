describe('Render counters', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Mobile: should render counters view wihout counters', () => {
    cy.server().route({
      method: 'GET',
      url: '**/counter**',
      status: 200,
      response: [],
    });
    cy.setViewportSM();
    cy.get('[data-cy=getStarted]').click();
    cy.contains('No counters yet');
  });
  it('Mobile: should render counters view wih counters', () => {
    cy.server().route({
      method: 'GET',
      url: '**/counter**',
      status: 200,
      response: 'fixture:countersFull.json',
    });
    cy.setViewportSM();
    cy.get('[data-cy=getStarted]').click();
    cy.contains('Glasses of water');
  });

  it('Mobile: should render counters view with error', () => {
    cy.server().route({
      method: 'GET',
      url: '**/counter',
      status: 500,
      response: {},
    });
    cy.setViewportSM();
    cy.get('[data-cy=getStarted]').click();
    cy.contains("Couldn't load the counters");
    cy.get('[data-cy=fetchRetryButton]').click();
    cy.contains("Couldn't load the counters");
  });

  it('Desktop: should render counters view wihout counters', () => {
    cy.server().route({
      method: 'GET',
      url: '**/counter**',
      status: 200,
      response: [],
    });
    cy.setViewportXL();
    cy.get('[data-cy=getStarted]').click();
    cy.contains('No counters yet');
  });
  it('Desktop: should render counters view wih counters', () => {
    cy.server().route({
      method: 'GET',
      url: '**/counter**',
      status: 200,
      response: 'fixture:countersFull.json',
    });
    cy.setViewportXL();
    cy.get('[data-cy=getStarted]').click();
    cy.contains('Glasses of water');
  });

  it('Desktop: should render counters view with error', () => {
    cy.server().route({
      method: 'GET',
      url: '**/counter',
      status: 500,
      response: {},
    });
    cy.setViewportXL();
    cy.get('[data-cy=getStarted]').click();
    cy.contains("Couldn't load the counters");
    cy.get('[data-cy=fetchRetryButton]').click();
    cy.contains("Couldn't load the counters");
  });
});
