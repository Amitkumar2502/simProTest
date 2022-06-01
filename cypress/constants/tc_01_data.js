export const ORDER_BOOK_DETAILS = [
  //BOOKS
  {
   BOOK_TYPE:'Fiction',
   BOOK_NAME:'',
   UNITS:1,
   PRICE_PER_UNIT:35,
   APPLY_DISCOUNT:false,
   DISCOUNT:0 ,
   IS_VALID_ORDER:false,
   EXPECTED_ERROR_MESSAGE:"Input is not valid",
   TEST_NAME:"CHOOSE BOOK FIELD TEST FOR EMPTY VALUE"
 },
   {
   //units
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:0,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Input is not valid",
  TEST_NAME:"UNIT FIELD TEST FOR 0 VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:'string',
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Input is not valid",
  TEST_NAME:"UNIT FIELD TEST FOR STRING VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:-1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Input is not valid",
  TEST_NAME:"UNIT FIELD TEST FOR NEGATIVE NUMBER"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1.5,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"",
  TEST_NAME:"UNIT FIELD TEST FOR DECIMAL VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:true,
  EXPECTED_ERROR_MESSAGE:"",
  TEST_NAME:"UNIT FIELD TEST INTEGER"
},
// price 
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:0,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Input is not valid",
  TEST_NAME:"PRICE FIELD TEST FOR 0 VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:"string",
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Invalid price",
  TEST_NAME:"PRICE FIELD TEST FOR STRING VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:-1,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Invalid price",
  TEST_NAME:"PRICE FIELD TEST FOR NEGATIVE VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35.80,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:true,
  EXPECTED_ERROR_MESSAGE:"",
  TEST_NAME:"PRICE FIELD TEST FOR DECIMAL VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:false,
  DISCOUNT:0 ,
  IS_VALID_ORDER:true,
  EXPECTED_ERROR_MESSAGE:"",
  TEST_NAME:"PRICE FIELD TEST FOR INTEGER VALUE"
},
// DISCOUNT VALUE CHECK 
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:true,
  DISCOUNT:0 ,
  IS_VALID_ORDER:true,
  EXPECTED_ERROR_MESSAGE:"",
  TEST_NAME:"DISCOUNT FIELD TEST FOR 0 DISCOUNT VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:true,
  DISCOUNT:-10 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Invalid discount amount !",
  TEST_NAME:"DISCOUNT FIELD TEST FOR NEGATIVE DISCOUNT VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:true,
  DISCOUNT:"string" ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Invalid discount amount !",
  TEST_NAME:"DISCOUNT FIELD TEST FOR STRING DISCOUNT VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:true,
  DISCOUNT:120 ,
  IS_VALID_ORDER:false,
  EXPECTED_ERROR_MESSAGE:"Invalid discount amount !",
  TEST_NAME:"DISCOUNT FIELD TEST FOR GREATER THAN 100% DISCOUNT VALUE"
},
{
  BOOK_TYPE:'Fiction',
  BOOK_NAME:'Harry Potter',
  UNITS:1,
  PRICE_PER_UNIT:35,
  APPLY_DISCOUNT:true,
  DISCOUNT:10 ,
  IS_VALID_ORDER:true,
  EXPECTED_ERROR_MESSAGE:"",
  TEST_NAME:"DISCOUNT FIELD TEST FOR VALID VALUE"
}
]