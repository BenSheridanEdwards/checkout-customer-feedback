describe("ProductFeedback", () => {
  it("should to fill in the form and submit", () => {
    cy.visit("/");
    cy.intercept("GET", "http://localhost:3002/feedback", {
      fixture: "feedback.json"
    }).as("getFeedback");
    cy.wait(["@getFeedback"]);
    cy.findByLabelText("Name")
      .click()
      .type("Ben");
    cy.findByLabelText("Email")
      .click()
      .type("bensheridanedwards@gmail.com");
    cy.findByTestId("star-5").click({ force: true });
    cy.findByLabelText("Comment")
      .click()
      .type("This is my test comment");
    cy.intercept("POST", "/feedback", {
      statusCode: 201,
      body: {
        id: 100,
        date: "08/09/2021, 10:31:37",
        name: "Ben",
        email: "bensheridanedwards@gmail.com",
        rating: 5,
        comment: "This is my test comment"
      }
    });
    cy.findByText("Submit").click();
    cy.findByText("Form successfully submitted").should("exist");
  });
});
