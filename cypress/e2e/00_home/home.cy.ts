// type definitions for Cypress object "cy"
/// <reference types="cypress" />



describe("Home Page Test", () => {
  beforeEach(() => {
    cy.visit("/home");
  });

  it("Home page check valid url", () => {
    cy.url().should("include", "/home");
  });

   it("Home page add message", () => {
    cy.get('[data-test="messageTest"]').type("TEST");
    cy.get('[data-test="submitButton"]').contains("SUBMIT").click();
    
  });

});
