import {ORDER_BOOK_PAGE} from "../pages/order_books_page"


Cypress.Commands.add('placeOrder',(BOOK_DETAILS,NEED_DISCOUNT)=>{
  cy.get(ORDER_BOOK_PAGE.FICTION_RADIO_BUTTON)
    .should('be.checked')
    .and('have.value', 'Fiction');
    
    //select the book type
    cy.get(ORDER_BOOK_PAGE.DRAMA_RADIO_BUTTON)
    .check()
    .should('be.checked')
    .and('have.value',BOOK_DETAILS.BOOK_TYPE);

    // select book name
    cy.get(ORDER_BOOK_PAGE.CHOOSE_BOOK_OPTION)
    .should('be.visible')
    .select(BOOK_DETAILS.BOOK_NAME)
    
    // try to submit without filling all details and check required fields
    cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON)
    .should('be.visible')
    .click()

    cy.get('p').eq(0).should('contain','Input is not valid')
     
    cy.get(ORDER_BOOK_PAGE.UNITS_INPUT).clear()
    .type(BOOK_DETAILS.UNITS)
    .should('have.value',BOOK_DETAILS.UNITS)

    cy.get('p').eq(0).should('contain','Price is required')

    cy.get(ORDER_BOOK_PAGE.PRICE_INPUT).clear()
    .type(BOOK_DETAILS.PRICE_PER_UNIT)
    .should('have.value',BOOK_DETAILS.PRICE_PER_UNIT)

    // Select discount checkbox
if (NEED_DISCOUNT) {
  cy.get(ORDER_BOOK_PAGE.DISCOUNT_CHECKBOX)
  .should('be.visible')
  .check();
 
  cy.get(ORDER_BOOK_PAGE.DISCOUNT_INPUT)
   .should('be.visible')
   .clear()
   .type(BOOK_DETAILS.DISCOUNT)

} 
cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON)
  .should('be.visible')
  .click()
   
})