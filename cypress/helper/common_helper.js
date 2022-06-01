  export const get_total_price = (unit,unit_per_price)=>{
  return unit * unit_per_price;
}

export const  get_discounted_price = (total_price,discount)=>{
  return (total_price * discount/100);
}

export const get_final_price = (total_price,discounted_price) => {
 return total_price - discounted_price;
}



