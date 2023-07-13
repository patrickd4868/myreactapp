import inputValues from "../fixtures/inputValues.json";

describe("TestingPage", () => {
  beforeEach(() => {
    cy.visit("/testing");
  });

  it("should render the Testing Page correctly", () => {
    cy.contains("Testing Page").should("exist");
  });

  it("should render the text input correctly", () => {
    cy.get('[data-testid="text-input"]').should("exist");
  });

  it("should be able to enter text in the input field", () => {
    cy.get('[data-testid="text-input"]')
      .type(inputValues.textInput)
      .should("have.value", inputValues.textInput);
  });

  it("should clear the text input field on button click", () => {
    cy.get('[data-testid="text-input"]')
      .type(inputValues.textInput)
      .should("have.value", inputValues.textInput);
    cy.get('[data-testid="clear-button"]').click();
    cy.get('[data-testid="text-input"]').should("have.value", "");
  });

  it('should clear all input fields and session storage on "Clear All" button click', () => {
    cy.get('[data-testid="text-input"]').type(inputValues.textInput);
    cy.get('[data-testid="name-input"]').type(inputValues.name);
    cy.get('[data-testid="email-input"]').type(inputValues.email);
    cy.get('[data-testid="clear-all-button"]').click();
    cy.get('[data-testid="text-input"]').should("have.value", "");
    cy.get('[data-testid="name-input"]').should("have.value", "");
    cy.get('[data-testid="email-input"]').should("have.value", "");
    cy.window().then((window) => {
      expect(window.sessionStorage.getItem("textInput")).to.be.null;
      expect(window.sessionStorage.getItem("name")).to.be.null;
      expect(window.sessionStorage.getItem("email")).to.be.null;
    });
  });

  it("should maintain input values in session storage after navigating away and returning", () => {
    cy.get('[data-testid="text-input"]').type(inputValues.textInput);
    cy.get('[data-testid="name-input"]').type(inputValues.name);
    cy.get('[data-testid="email-input"]').type(inputValues.email);
    cy.visit("/testing");
    cy.contains("Testing Page").click();
    cy.get('[data-testid="text-input"]').should(
      "have.value",
      inputValues.textInput
    );
    cy.get('[data-testid="name-input"]').should("have.value", inputValues.name);
    cy.get('[data-testid="email-input"]').should(
      "have.value",
      inputValues.email
    );
  });

  it('should clear input values in session storage after clicking "Clear All" and navigating away and returning', () => {
    cy.get('[data-testid="text-input"]').type(inputValues.textInput);
    cy.get('[data-testid="name-input"]').type(inputValues.name);
    cy.get('[data-testid="email-input"]').type(inputValues.email);
    cy.get('[data-testid="clear-all-button"]').click();
    cy.visit("/testing");
    cy.contains("Testing Page").click();
    cy.get('[data-testid="text-input"]').should("have.value", "");
    cy.get('[data-testid="name-input"]').should("have.value", "");
    cy.get('[data-testid="email-input"]').should("have.value", "");
    cy.window().then((window) => {
      expect(window.sessionStorage.getItem("textInput")).to.be.null;
      expect(window.sessionStorage.getItem("name")).to.be.null;
      expect(window.sessionStorage.getItem("email")).to.be.null;
    });
  });

  it("should render the list correctly", () => {
    cy.get('[data-testid="test-list"] li').should("have.length", 3);
  });

  it("should render the dropdown correctly", () => {
    cy.get('[data-testid="test-dropdown"]').should("exist");
  });

  it("should contain a specific number of options in the dropdown", () => {
    cy.get('[data-testid="test-dropdown"] option').should("have.length", 3);
  });

  it("should render the form correctly", () => {
    cy.get('[data-testid="test-form"]').should("exist");
  });

  it("should be able to enter text in the name input field", () => {
    cy.get('[data-testid="name-input"]')
      .type(inputValues.name)
      .should("have.value", inputValues.name);
  });

  it("should be able to enter text in the email input field", () => {
    cy.get('[data-testid="email-input"]')
      .type(inputValues.email)
      .should("have.value", inputValues.email);
  });
});
