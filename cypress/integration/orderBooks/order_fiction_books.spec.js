/// <reference types="cypress" />

import {ORDER_BOOK_PAGE} from "../../pages/order_books_page"


const BOOK_DETAILS = {
    BOOK_NAME:'Harry Potter',
    UNITS:50,
    PRICE_PER_UNIT:20,
    DISCOUNT:0   
},

TOTAL_AMOUNT = BOOK_DETAILS.PRICE_PER_UNIT * BOOK_DETAILS.UNITS,
FINAL_TOTAL_AMOUNT = TOTAL_AMOUNT - TOTAL_AMOUNT*BOOK_DETAILS.DISCOUNT/100;


describe('order book',()=>{
  beforeEach('visit the index file',()=>{
    cy.visit('/index.html')
    cy.viewport('macbook-13')
  
  })
  it.only('order fiction book test',()=>{

    //verify Fiction checkbox is by default selected or not
    cy.get(ORDER_BOOK_PAGE.FICTION_RADIO_BUTTON)
    .should('be.checked')
    .and('have.value', 'Fiction');
// select harry potter book
    cy.get(ORDER_BOOK_PAGE.CHOOSE_BOOK_OPTION)
    .should('be.visible')
    .select('Harry Potter')
    .should('have.value','Harry Potter')
    
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

    cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON)
    .should('be.visible')
    .click()

//VERIFY ALL TRANSACTION COLUMN
cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
.eq(0)    
.should('contain','Item no')
  
  cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
  .eq(1)   
    .should('contain','Books')
  
  cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
  .eq(2)   
    .should('contain','Units')
  
  cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
  .eq(3)   
    .should('contain','Price')

  cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
  .eq(4)   
    .should('contain','Amount (AUD)')
 
  cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
  .eq(5)   
    .should('contain','Discount Amount (AUD)')
  
    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_COLUMN)
    .eq(6)   
    .should('contain','Final Amount (AUD)')

    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(0)   
    .should('contain','1')

    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(1)   
    .should('contain',BOOK_DETAILS.BOOK_NAME)
    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(2)   
    .should('contain',BOOK_DETAILS.UNITS)

    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(3)   
    .should('contain',BOOK_DETAILS.PRICE_PER_UNIT)
    
    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(4)   
    .should('contain',TOTAL_AMOUNT)

    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(5)   
    .should('contain',BOOK_DETAILS.DISCOUNT)


    cy.get(ORDER_BOOK_PAGE.TRANSACTION_RECORD_TABLE_ROW)
    .eq(6)   
    .should('contain',FINAL_TOTAL_AMOUNT)





  })


  it('order drama book test',()=>{
     
  })
})