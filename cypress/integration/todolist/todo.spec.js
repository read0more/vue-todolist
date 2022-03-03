/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  before(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3001");
  });

  it("add todos", () => {
    const newItem = "Feed the cat";
    cy.get("#new-todo").first().type(`${newItem}{enter}`);
    cy.get("#todo-list li")
      .should("have.length", 1)
      .last()
      .should("have.text", newItem);
  });

  it("add todo2", () => {
    const newItem = "Feed the cat2";
    cy.get("#new-todo").first().type(`${newItem}{enter}`);
    cy.get("#todo-list li")
      .should("have.length", 2)
      .last()
      .should("have.text", newItem);
  });
});
