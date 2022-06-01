import {ORDER_BOOK_PAGE} from "../pages/order_books_page"



//
Cypress.Commands.add('place_order',(ORDER_DETAILS)=>{
  
  // default checkbox should be checked 
  cy.get(ORDER_BOOK_PAGE.FICTION_RADIO_BUTTON)
    .should('be.checked')
    .and('have.value', 'Fiction');
    
    //select the book type
    if(ORDER_DETAILS.BOOK_TYPE === 'Drama'){
      cy.get(ORDER_BOOK_PAGE.DRAMA_RADIO_BUTTON)
      .check()
      .should('be.checked')
    }
    
    // select book name
    if (ORDER_DETAILS.BOOK_NAME !== '') {
      cy.get(ORDER_BOOK_PAGE.CHOOSE_BOOK_OPTION)
    .should('be.visible')
    .select(ORDER_DETAILS.BOOK_NAME)
    }
    
    
    
    //enter unit value
    cy.get(ORDER_BOOK_PAGE.UNITS_INPUT).clear()
    .type(ORDER_DETAILS.UNITS)
    .should('have.value',ORDER_DETAILS.UNITS)

   //enter price value
    cy.get(ORDER_BOOK_PAGE.PRICE_INPUT).clear()
      .type(ORDER_DETAILS.PRICE_PER_UNIT)
      .should('have.value',ORDER_DETAILS.PRICE_PER_UNIT)

    // Select discount checkbox
 if (ORDER_DETAILS.APPLY_DISCOUNT) {
   
  //check discount checkbox
  cy.get(ORDER_BOOK_PAGE.DISCOUNT_CHECKBOX)
      .should('be.visible')
      .check();
 
      //enter in value in discount input value
    cy.get(ORDER_BOOK_PAGE.DISCOUNT_INPUT)
      .should('be.visible')
      .clear()
      .type(ORDER_DETAILS.DISCOUNT)

} 
//click on submit button
cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON)
  .should('be.visible')
  .click()


  if(ORDER_DETAILS.IS_VALID_ORDER === false){
    //verify error message
     cy.get('p').eq(0).should('contain',ORDER_DETAILS.EXPECTED_ERROR_MESSAGE)

     //verify transaction table data should not exist
     cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
     .should('not.exist')
    }
   
})




Cypress.Commands.add('verify_transaction_table',(TRANSACTION_RECORD_TABLE)=>{
  
  //verify transaction table column name
  TRANSACTION_RECORD_TABLE[0].forEach((column_name,index)=>{
    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
      .eq(index)    
      .should('contain',column_name)
})

//verify transaction table rows values
 TRANSACTION_RECORD_TABLE[1].forEach((rows_values,index)=>{
    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
      .eq(index)    
      .should('contain',rows_values)
})
})

