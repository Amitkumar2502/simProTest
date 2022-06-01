
import {get_total_price,get_discounted_price,get_final_price} from "./common_helper";

export const get_transaction_table= (ORDER_DETAILS)=>{
  const NO_OF_UNIT = ORDER_DETAILS.UNITS,
        PRICE_PER_UNIT = ORDER_DETAILS.PRICE_PER_UNIT,
        DISCOUNT = ORDER_DETAILS.DISCOUNT,
        TOTAL_AMOUNT = get_total_price(NO_OF_UNIT,PRICE_PER_UNIT),
        DISCOUNTED_AMOUNT = get_discounted_price(TOTAL_AMOUNT,DISCOUNT),
        FINAL_TOTAL_AMOUNT = get_final_price(TOTAL_AMOUNT,DISCOUNTED_AMOUNT);
   return [
    ["Item no","Books","Units","Price",'Amount (AUD)',"Discount Amount (AUD)","Final Amount (AUD)"],
    ['1',ORDER_DETAILS.BOOK_NAME,NO_OF_UNIT,PRICE_PER_UNIT,TOTAL_AMOUNT,DISCOUNTED_AMOUNT,FINAL_TOTAL_AMOUNT]
  ];
  


}

