describe('Search Counter', () => {
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

  it('Mobile: Search counter with results', () => {
    cy.setViewportSM();
    cy.get('[data-cy=searchInput]').click().type('glasses');
    cy.contains('Glasses of water');
  });

  it('Mobile: Search counter without results', () => {
    cy.setViewportSM();
    cy.get('[data-cy=searchInput]').click().type('aaaa');
    cy.contains('No results');
  });

  it('Mobile: Cancel search', () => {
    cy.setViewportSM();
    cy.get('[data-cy=searchInput]').click().type('aaaa');
    cy.get('[data-cy=searchCancel]').click();
    cy.contains('Glasses of water');
    cy.contains('Naps');
  });

  it('Desktop: Search counter with results', () => {
    cy.setViewportXL();
    cy.get('[data-cy=searchInput]').click().type('glasses');
    cy.contains('Glasses of water');
  });

  it('Desktop: Search counter without results', () => {
    cy.setViewportXL();
    cy.get('[data-cy=searchInput]').click().type('aaaa');
    cy.contains('No results');
  });

  it('Desktop: Cancel search', () => {
    cy.setViewportXL();
    cy.get('[data-cy=searchInput]').click().type('aaaa');
    cy.get('[data-cy=searchCancel]').click();
    cy.contains('Glasses of water');
    cy.contains('Naps');
  });
});
