let usdToVnd = 23380.90
let usdToKrw = 1,227.05
let usdToEur = 0.93
function(from,to,amount){
    let result;
    if(from == "USD" && to == "KRW"){
        result = amount*usdToKrw
    } else if(from == "USD" && to == "EUR"){
        result = amount*usdToEur
    } else if(from == "USD" && to == "VND"){
        result = amount*usdToEur
    } else if(from == "KRW" && to == "USD"){
        result = amount/usdToKrw
    } else if(from == "KRW" && to == "EUR"){
        result = amount/usdToKrw *usdToEur
    } else if(from == "KRW" && to == "VND"){
        result = amount/usdToKrw * usdToVND
    } else if(from == "VND" && to == "USD"){
        result = amount/usdToVnd
    } else if(from == "VND" && to == "EUR"){
        result = amount/usdToVnd *usdToEur
    } else if(from == "VND" && to == "KRW"){
        result = amount/usdToVnd * usdToKrw
    } else if(from == "EUR" && to == "USD"){
        result = amount/usdToVnd
    } else if(from == "EUR" && to == "KRW"){
        result = amount/usdToEur * usdToKrw
    } else if(from == "EUR" && to == "VND"){
        result = amount/usdToEur * usdToVnd
    } else {
        alert("Invalid Input!")
    }
} 
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }

function 
  console.log(formatCurrency("USD",215.51));
  console.log(formatCurrency("CNY",26984));
  console.log(formatCurrency("VND",5800.175));