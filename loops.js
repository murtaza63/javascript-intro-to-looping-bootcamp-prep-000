

var i = 0;
 
function incrementVariable() {
  i = i+1;
  return i++;
}
function forLoop(array){

for(let i=0; i<25; i++){
  if(i===1){
    array.push( `I am ${i} strange loop.`);
  }else{
    array.push(`I am ${i} strange loops.`);
  }
}
return array;
}
var sample_arr= [];
console.log(forLoop(sample_arr));

function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return "done";
}
function maybeTrue(){
  return Math.random()>=0.5;
}
var h = 0
function doWhileLoop(num){
  do{
    console.log("I run once regardless");
    h++;
    
  }while(h<num)
  
}
doWhileLoop(10)