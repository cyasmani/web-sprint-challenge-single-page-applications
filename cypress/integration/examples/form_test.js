describe("My First Test", function() {
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza")
    });

    it("Finds the Name input", () => {
        cy.get('#name')
        .type("Yasmani Castaneda")
        .should("have.value","Yasmani Castaneda")
        
    })

    it("Validation input", () => {
        cy.get("#name").type("m"),
        cy.get('p')
        .should("have.length", 1)
    
     })

    it("Enter in instructions", () => {
        cy.get('textarea')
        .type("Moonwalk to the door")
        .should("have.value","Moonwalk to the door")
        
    })

    it("Select a size"), () => {
        //doesnt work
        cy.get('#sizes')
        .select('large')
        .should('have.value', "Large")
    }

    

    

    it("See if you can select multiple toppings", () => {
        cy.get('#bacon').check().should("be.checked"),
        cy.get('#ham').check().should("be.checked")
        
    })

    it("See if submit button works", () => {
        cy.get('.box > button').click()
        
    })


})