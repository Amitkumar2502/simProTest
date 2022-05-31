/// <reference types="cypress" />

import {ORDER_BOOK_PAGE} from "../../pages/order_books_page"


const BOOK_DETAILS = {
    BOOK_TYPE:'Drama',
    BOOK_NAME:'The Rainbow',
    UNITS:1,
    PRICE_PER_UNIT:125,
    DISCOUNT:10   
},
TOTAL_AMOUNT = BOOK_DETAILS.PRICE_PER_UNIT * BOOK_DETAILS.UNITS,
DISCOUNTED_AMOUNT = (TOTAL_AMOUNT*BOOK_DETAILS.DISCOUNT/100),
FINAL_TOTAL_AMOUNT = TOTAL_AMOUNT - DISCOUNTED_AMOUNT,
TRANSACTION_RECORD_TABLE_ROWS=[
  ["Item no","Books","Units","Price",'Amount (AUD)',"Discount Amount (AUD)","Final Amount (AUD)"],
  ['1',BOOK_DETAILS.BOOK_NAME,BOOK_DETAILS.UNITS,BOOK_DETAILS.PRICE_PER_UNIT,TOTAL_AMOUNT,DISCOUNTED_AMOUNT,FINAL_TOTAL_AMOUNT]
];



describe('ORDER DRAMA BOOK',()=>{
  before('visit the index file and set viewport',()=>{
    cy.visit('/index.html')
    
    // check page is loaded and contents are available in html
    cy.contains('Order Books')
    cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON).should('be.visible')

    cy.viewport('macbook-13')
  
  })
  it('Place drama book order and verify transaction record',()=>{
    
    cy.placeOrder(BOOK_DETAILS,false);
    //verify Fiction checkbox is by default selected or not
    // cy.get(ORDER_BOOK_PAGE.FICTION_RADIO_BUTTON)
    // .should('be.checked')
    // .and('have.value', 'Fiction');
    
    // //select the book type
    // cy.get(ORDER_BOOK_PAGE.DRAMA_RADIO_BUTTON)
    // .check()
    // .should('be.checked')
    // .and('have.value',BOOK_DETAILS.BOOK_TYPE);

    // // select book name
    // cy.get(ORDER_BOOK_PAGE.CHOOSE_BOOK_OPTION)
    // .should('be.visible')
    // .select(BOOK_DETAILS.BOOK_NAME)
    
    // // try to submit without filling all details and check required fields
    // cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON)
    // .should('be.visible')
    // .click()

    // cy.get('p').eq(0).should('contain','Input is not valid')
     
    // cy.get(ORDER_BOOK_PAGE.UNITS_INPUT).clear()
    // .type(BOOK_DETAILS.UNITS)
    // .should('have.value',BOOK_DETAILS.UNITS)

    // cy.get('p').eq(0).should('contain','Price is required')

    // cy.get(ORDER_BOOK_PAGE.PRICE_INPUT).clear()
    // .type(BOOK_DETAILS.PRICE_PER_UNIT)
    // .should('have.value',BOOK_DETAILS.PRICE_PER_UNIT)

    // // Select discount checkbox

    // cy.get(ORDER_BOOK_PAGE.DISCOUNT_CHECKBOX)
    //  .should('be.visible')
    //  .check();
    
    //  cy.get(ORDER_BOOK_PAGE.DISCOUNT_INPUT)
    //   .should('be.visible')
    //   .clear()
    //   .type(BOOK_DETAILS.DISCOUNT)

    // cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON)
    //  .should('be.visible')
    //  .click()

//VERIFY ALL TRANSACTION COLUMN

TRANSACTION_RECORD_TABLE_ROWS[0].forEach((columnName,index)=>{
  cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
    .eq(index)    
    .should('contain',columnName)
})

TRANSACTION_RECORD_TABLE_ROWS[1].forEach((rowsName,index)=>{
  cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(index)    
    .should('contain',rowsName)
   })
  })

  after('delete the record after testing',() =>{
      cy.get(ORDER_BOOK_PAGE.DELETE_TRANSACTION_RECORD_TABLE_ROW_BUTTON)
        .should('exist')
        .click()
      
      cy.contains('Yes, Delete it!').click();
      
      cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
        .should('not.exist')
  })

})