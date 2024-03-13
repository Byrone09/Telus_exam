it('Successful Login',() => {
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Email').type('byrone0908@gmail.com')
    cy.get('.sui-c-btn-primary').click()
    cy.contains('Password').type('P@ssword01')
    cy.get('.sui-c-btn-primary').click()
    cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').click()
    cy.contains('My Profile').click()
}) 

it('Update Location/Address',() => {
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Email').type('byrone0908@gmail.com')
    cy.get('.sui-c-btn-primary').click()
    cy.contains('Password').type('P@ssword01')
    cy.get('.sui-c-btn-primary').click()
    cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').click()
    //Note: not recommend to use this xpath above due to it can be changed anytime if there's an update. this is prone to error on automated test
    cy.contains('My Profile').click()
    cy.contains('Contact Info').click()
    cy.get(':nth-child(1) > :nth-child(1) > .col-lg-2 > .sui-rounded').click()
    cy.contains('Street address*').type('BLK 2 LOT 3 PH3 L4')
    cy.contains('Save').click()


})

it('Update Primary Language',() => {
    cy.visit('https://www.telusinternational.ai/cmp')
    cy.contains('Email').type('byrone0908@gmail.com')
    cy.get('.sui-c-btn-primary').click()
    cy.contains('Password').type('P@ssword01')
    cy.get('.sui-c-btn-primary').click()
    cy.get('.sui-gap-2 > .sui-rounded-full > .sui-flex').click()
    cy.contains('My Profile').click()
    cy.get('[href="/cmp/contributor/userprofile/languages"]').click()
    cy.contains('Add').click()
    // cy.get('.sui-c-input-dropdown__single-value').click()
    // cy.get('.figma-input-field-margin > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-flex').click()
    // cy.contains('Professional working proficiency').click()

})