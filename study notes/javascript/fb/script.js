var database = [

	{
		username:"jake",
		password: "jd"
	},

	{
		username:"john",
		password: "jdd"
	},
	{
		username:"jon",
		password: "jdd"
	}
];


var newsFeed = [
	{
		news1: "hello",
		news2: "hello2"
	},

	{
		news1: "hello3",
		news2: "hello4"
	}
];

function isUserValid(username, password){
		var i;
	for (i = 0; i < database.length; i++){
		if (database[i].username === username && database[i].password === password)
		{
			return true;
		} 
		return false;
	}




function signIn(username, password){

	if (isUserValid(username, password)){
		console.log(newsFeed);
	} else {
		alert("wrong");
	}
}

var userPrompt = prompt("username?");
var passPrompt = prompt("password?");

signIn(userPrompt, passPrompt);


