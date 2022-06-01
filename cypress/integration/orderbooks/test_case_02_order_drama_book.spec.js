/// <reference types="cypress" />

import {ORDER_BOOK_PAGE} from "../../pages/order_books_page"
import {DRAMA_BOOK_DETAIL} from "../../constants/tc_02.data"
import {get_transaction_table} from "../../helper/transaction_table_helper"

describe('ORDER DRAMA BOOK AND VERIFY TRANSACTION TABLE',()=>{
  
  before('visit the index file and set viewport',()=>{
    cy.visit('/index.html')
    
    // check page is loaded and contents are available in html
    cy.contains('Order Books')
    cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON).should('be.visible')

    cy.viewport('macbook-13')
  
  })
  it('Place drama book order and verify transaction record',()=>{
    
    cy.order(DRAMA_BOOK_DETAIL);
    
    let table =  get_transaction_table(DRAMA_BOOK_DETAIL)
       cy.verifyTable(table)
    
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