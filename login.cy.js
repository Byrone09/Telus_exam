/// <reference types="cypress"/>

//successful login
it('Successful Login',() => {
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Email').type('byrone09@gmail.com')
    cy.get('.sui-c-btn-primary').click()
    cy.contains('Password').type('P@ssword01')
    cy.get('.sui-c-btn-primary').click()
}) 

//incorrect password
it('Login with incorect password',() => {
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Email').type('byrone09@gmail.com')
    cy.get('.sui-c-btn-primary').click()
    cy.contains('Password').type('P@ssword011111111')
    cy.get('.sui-c-btn-primary').click()
    
}) 

//Forgot password
it('Forgot password',() => {
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Forgot password?').click()    
}) 

it('Forgot password with blank email', () =>{
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Forgot password?').click()  
    cy.get('.sui-gap-2 > .sui-c-btn-primary').click()
})