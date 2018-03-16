//
//Functions
//

function myFunction(firstMessage, secondMessage){
  console.log("In myFunction ("+firstMessage+","+secondMessage+")");
}

//myFunction("Message1", "Message2");

//Function returning value
function thriceNumber(num)
{
  let result = num + num + num;
  return result;
}

//let result = thriceNumber(3);
//console.log(result);

let message="Satpal Pundeer";

//function scope
function funcScope()
{
  let message = "Amit Singh Pundeer";
  return message;
}

funcScope()

console.log(message);

