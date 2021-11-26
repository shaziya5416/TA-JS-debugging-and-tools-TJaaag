//Assertion Library

function expect(actual){
return {
toEqual:function(expected){
if(actual!==expected)
{
throw new error(`${actual} is not equal to ${expected}`);
}
}
}
//Testing Framework
function test (message,callback){
try{
callback();
console.log("Yes",message);
}
catch(error){
console.error(error);
console.log("no",message);
}
}
function add(a,b){
return a+b;
}
function mul(c,d){
return c*d;
}
function sub(e,f){
return e-f;
}
function div(g,h){
return g/h;
}
}

//Testing

test(`adding 10 and 10 equal to 20`,()=>
{
expect(add(10,10)).toEqual(25); 
});
test(`adding 10 and 10 equal to 20`,()=>
{
expect(mul(10,10)).toEqual(25); 
});
test(`adding 10 and 10 equal to 20`,()=>
{
expect(sub(10,10)).toEqual(25); 
});
test(`adding 10 and 10 equal to 20`,()=>
{
expect(div(10,10)).toEqual(25); 
});


