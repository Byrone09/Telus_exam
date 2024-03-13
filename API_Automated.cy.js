//sorry about this - our API needs to a bearer token before it will proceed on login
//I'm trying to get the response on login but I'm already lack of time, I only got 72hrs to do it, I'm still learning on api automation
describe("API TESTING", () => {
  
  it("POST API", ()=>{
    
    cy.request( {
      method : 'POST',
      url: 'https://sentrylocaldemo.zkteco.ph',
    })

    .its('status')
    .should('equal', 200);
  })
})