// define amounjt
let amount = prompt("How much VND?")
//Milestone 6L parse int
while(amount != parseInt){
    console.log("Invalid Output! Please try again.");
    let amount = prompt("How much VND?");
}
// define from currency
let currency = "USD"
// define to currency
let toVnd = "VND"
// define to currency ratio (23.1)
let currencyRatio = 23.1;
// Milestone 5: define converting ratio 
function convert(amount,currencyRatio){
    let result = amount * currencyRatio;
    
    console.log(result);
    return result
}
//Convert usd to vnd
function usdtoVnd(from,to){
    if(from=="VND" && to =="USD"){
        let result = amount * currencyRatio;
        console.log(result);
    }
    if(from=="USD" && to=="VND"){
        let result = amount / currencyRatio;
        console.log(result);
    }
}
convert("VND","USD")
// ammount * currency = converted currency

// define result

//Milestone 7 :

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }
formatCurrency(Pounds,60)