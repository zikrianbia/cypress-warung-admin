/// <reference types="cypress" />

describe('login with email', () => {
    beforeEach(() => {
      cy.visit('')
    })
  
    it('should success login with email', () => {
        cy.get('#normal_login_email').type("admin@srikopi.com")
        cy.get('#normal_login_password').type("rahasia123")
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
        cy.contains('Top Transactions')
    })
  })
  