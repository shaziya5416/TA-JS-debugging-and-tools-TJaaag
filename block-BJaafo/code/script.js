/*function names(fullName="",lastName=""){
return fullName+" " + lastName}

let result1=names("Brandon", "Stark");
let result2=names("Arya", "Stark");
let expected ="Arya Sstark";

if(result1!==expected){
	throw new Error("Not equal")
}
if(result2!==expected){
        throw new Error("Not equal")
}
*/
function tax(amount,taxrate){
return amount + (amount * taxrate)
}

let result3=tax(100,1);
let result4=tax(100,2);
let expected1=200;
if(result3!==expected1){
        throw new Error("Not equal")
}
if(result4!==expected1){
        throw new Error("Not equal")
}
