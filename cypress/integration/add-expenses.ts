import expenses from '../../expenses';

const element = (selector: string) => `[data-automation="${selector}"]`;

describe('Add Expenses', () => {
  it('Logs in and adds expenses', () => {
    cy.visit('/');

    cy.get(element('login-email')).type(Cypress.env('USER_EMAIL'));

    cy.get(element('login-password')).type(Cypress.env('USER_PASSWORD'));

    cy.get(element('login-button')).click();

    // Login is especially slow
    cy.wait(2000);
    cy.get(element('add-expense-button'), { timeout: 10000 });

    for (const expense of expenses) {
      cy.get(element('add-expense-cost')).type(expense.cost.toString());
      cy.get(element('add-expense-description')).type(expense.description);
      if (expense.budget) {
        cy.get(element('add-expense-budget')).select(expense.budget);
      }
      if (expense.date) {
        cy.get(element('add-expense-date')).type(expense.date);
      }
      cy.get(element('add-expense-button')).click();

      cy.wait(500);
    }
  });
});
