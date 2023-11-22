class loginPage {

  email() {
     cy.get('input[data-qa="login-email"]')
  }
  password() {
    cy.get('input[data-qa="login-password"]')
 }
  loginButton() {
     return cy.get('button').contains('Submit')
  }
}

export default loginPage