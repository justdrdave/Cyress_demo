import Home from '../page-objects/homePage.js'

describe('Login Tests', () => {
  let home = new Home()
  beforeEach(() => {
    home.homepage()
    home.login().click()
  })

    it('visit login page', () => {
    cy.contains('Login to your account')
  })

  it('succesfull login', () => {
    cy.get('input[data-qa="login-email"]').type('david_loz_2000@yahoo.com')
    cy.get('input[data-qa="login-password"]').type('1234$abcd')
    cy.get('button').contains('Login').click()
    cy.contains('David')
  })

  it('invalid email', () => {
    cy.get('input[data-qa="login-email"]').type('david_losinski@yahoo.co.uk')
    cy.get('input[data-qa="login-password"]').type('1234$abcd')
    cy.get('button').contains('Login').click()
    cy.contains('Your email or password is incorrect!')
  })

  it('invalid email', () => {
    cy.get('input[data-qa="login-email"]').type('david_loz_2000@yahoo.com')
    cy.get('input[data-qa="login-password"]').type('abcd$1234')
    cy.get('button').contains('Login').click()
    cy.contains('Your email or password is incorrect!')
  })
})
