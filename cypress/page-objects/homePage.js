class homePage {

  homepage() {
     return cy.visit('https://automationexercise.com/')
  }
  login() {
     return cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a')
  }
  user() {
     return cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b')
  }
}

export default homePage
