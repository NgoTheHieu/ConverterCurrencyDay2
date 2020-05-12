let usdToEur = 0.92;
let usdToKrw = 1226.60;
let usdToVnd = 23380.90;
function vndToUsd() {
    let result = document.getElementById('amount').value; // grab the value that user typed at input box
    let convertedAmount = result / 23000;
    document.getElementById('result').innerHTML = `your money in USD is ${convertedAmount}`;
 }

 function convertCurrency(){
     
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    let amount = document.getElementById("amount").value
    let result = amount;
    if(from == "USD" && to == "KRW"){
        result = amount*usdToKrw;
    }  if(from == "USD" && to == "EUR"){
        result = amount*usdToEur;
    }  if(from == "USD" && to == "VND"){
        result = amount*usdToEur;
    }  if(from == "KRW" && to == "USD"){
        result = amount/usdToKrw;
    }  if(from == "KRW" && to == "EUR"){
        result = amount/usdToKrw *usdToEur;
    }  if(from == "KRW" && to == "VND"){
        result = amount/usdToKrw * usdToVND;
    }  if(from == "VND" && to == "USD"){
        result = amount/usdToVnd;
    }  if(from == "VND" && to == "EUR"){
        result = amount/usdToVnd *usdToEur;
    }  if(from == "VND" && to == "KRW"){
        result = amount/usdToVnd * usdToKrw;
    }  if(from == "EUR" && to == "USD"){
        result = amount/usdToEur;
    }  if(from == "EUR" && to == "KRW"){
        result = amount/usdToEur * usdToKrw;
    }  if(from == "EUR" && to == "VND"){
        result = amount/usdToEur * usdToVnd;
    } 
    
    document.getElementById("resultText").innerHTML = `your money from ${from} in ${to} is ${result}`;
    let toResult = formatCurrency(to,result)
    let fromResult = formatCurrency(from,result)
    document.getElementById("fromResult").innerHTML = formatCurrency(from,amount) + (" = ")
    document.getElementById("toResult").innerHTML = toResult
    return result
} 
function formatCurrency(currency, value) {
    const formatter = new Intl.NumberFormat(currency, {
      currency: currency,
      style: "currency"
    });
    return formatter.format(value);
  }
function reverse(){
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    let amount = document.getElementById("amount").value
    let initialValue = from;
    document.getElementById("from").value = to;
    document.getElementById("to").value = initialValue;
}
  document.getElementById('convertButton').addEventListener('click',convertCurrency);
  document.getElementById('reverseButton').addEventListener('click',reverse);
