/* function squareValue(value){
  console.log(value*value);
}

squareValue(2); */

function discountPrice(price,percentage) {
    return price - price*(percentage/100) ;
    
}
let Result=  discountPrice(1000,10);

console.log(Result);