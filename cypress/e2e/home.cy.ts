describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the correct title', () => {
    cy.title().should('equal', 'NextJS 12 Starter Template');
  });

  it('displays the correct logo', () => {
    cy.get('[data-testid="next-logo"]').should('be.visible');
  });

  it('displays the cards with the correct content', () => {
    cy.get('[data-testid^="card"]').as('cards');
    cy.get('@cards').should('have.length', 4);

    cy.get('@cards')
      .eq(0)
      .within(() => {
        cy.get('h2').should('have.text', 'Docs');
        cy.get('p').should('have.text', 'Find in-depth information about Next.js features and API.');
        cy.get('a').should(
          'have.attr',
          'href',
          'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        );
      });

    cy.get('@cards')
      .eq(1)
      .within(() => {
        cy.get('h2').should('have.text', 'Learn');
        cy.get('p').should('have.text', 'Learn about Next.js in an interactive course with quizzes!');
        cy.get('a').should(
          'have.attr',
          'href',
          'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        );
      });

    cy.get('@cards')
      .eq(2)
      .within(() => {
        cy.get('h2').should('have.text', 'Templates');
        cy.get('p').should('have.text', 'Discover and deploy boilerplate example Next.js projects.');
        cy.get('a').should(
          'have.attr',
          'href',
          'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        );
      });

    cy.get('@cards')
      .eq(3)
      .within(() => {
        cy.get('h2').should('have.text', 'Deploy');
        cy.get('p').should('have.text', 'Instantly deploy your Next.js site to a shareable URL with Vercel.');
        cy.get('a').should(
          'have.attr',
          'href',
          'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        );
      });
  });

  it('opens the links in a new tab', () => {
    cy.get('[data-testid^="card"] a').should('have.attr', 'target', '_blank');
    cy.get('[data-testid^="card"] a').should('have.attr', 'rel', 'noopener noreferrer');
  });

  it('contains a Vercel link', () => {
    cy.get('[data-testid="vercel-link"] a').should(
      'have.attr',
      'href',
      'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
    );
  });
});
