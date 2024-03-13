//navigate to url
it('create User_Login',() => {
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Sign up').click()
    cy.contains('Email').type('test101@gmail.com')
    cy.contains('First name').type('test')
    cy.contains('Last name').type('101')
    cy.contains('Continue').click()
}) 

