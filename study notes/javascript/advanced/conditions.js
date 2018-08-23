// condition ? expr1: expr2;
//example

function isUserValid(bool){
	return bool;
}
var answer = isUserValid(true)? "truu": "false";

//switch
 function moveCommand(direction){
 	var whatHappens:
 	switch(direction){
 		case "forward":
 		whatHappens = "1";
 		break;
 		case "back":
 		whatHappens = "2";
 		break;
 		case "left":
 		whatHappens = "3";
 		break;
 		default:
 		whatHappens = "4";
 	}
 	return whatHappens;
 }