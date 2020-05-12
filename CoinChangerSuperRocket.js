let notes = [500,200,100,50,20,10,5,2,1]
let z = 0
let timesOf500=0

let result =[];
function coinChanger(x){
    while(x>0){
        let quotient;
        let newValue= x;
        let text;
        while(newValue>0){
            
            if(newValue >= notes[z]){
                quotient = Math.floor(x/(notes[z]));
                result.push(quotient);
                x=x-(quotient*notes[z]);
                z++;
                for(i=0;i<result.length;i++){
                    console.log(notes[i],"k x ",result[i]);
                    
            }
            if(newValue<=notes[z]){
                result.push(0);
                z++;
            }
            
            }}
            
    return result;
}}
coinChanger(2323);
document.getElementById("changeButton").addEventListener("click",coinChanger)

