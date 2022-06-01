/// <reference types="cypress" />

import {ORDER_BOOK_PAGE} from "../../pages/order_books_page"
import {ORDER_BOOK_DETAILS} from "../../constants/tc_01_data"
import {get_transaction_table} from "../../helper/transaction_table_helper"


describe('ORDER BOOK AND VERIFY ALL REQUIRED FIELDS AND TRANSACTION TABLE',()=>{
  
  beforeEach('visit the index file and set viewport',()=>{
    
    cy.visit('/index.html')
    
    // check page is loaded and contents are available in html
    cy.contains('Order Books')
    cy.get(ORDER_BOOK_PAGE.SUBMIT_BUTTON).should('be.visible')
    cy.viewport('macbook-13')
   
  
  })
  ORDER_BOOK_DETAILS.forEach((order)=>{
    it(`${order.TEST_NAME}`,()=>{
      
      //place book order using custom method
      cy.place_order(order);

      if(order.IS_VALID_ORDER){
       //get transaction table 
        let table =  get_transaction_table(order)
        
        //verify transaction table 
       cy.verify_transaction_table(table)
      }
    })
  })

  


})