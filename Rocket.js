function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }
let USDtoKRW = 1222.86;
let USDtoIDR = 14,917.05;
let USDtoEUR = 0.92;
functon convert(from,to){
  if(from==KRW && to == IDR ){
    return from/1222.86 * 14.917.05;
  } else if()
    from== KRW && to == EUR
  ){
    return from /1222.86 * 0.92;
  } else if(from ==IDR && to == KRW){
    return from/USDtoIDR * USDtoKRW;
  }else if(from ==IDR && to == EUR){
    return from/USDtoIDR * USDtoEUR;
  }else if(from ==EUR && to == KRW){
    return from/USDtoEUR * USDtoKRW;
  }else if(from ==EUR && to == IDR){
    return from/USDtoEUR * USDtoIDR;
  } else {
    console.log("Invalid Input");
  }
  return to;
}
