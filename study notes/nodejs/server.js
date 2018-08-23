const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'))

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());
// app.use((req,res,next) => {//middleware
// 	console.log('<h1>hello</h1>')
// 	next();
// })
// app.get('/', (req,res) => {
// 	res.send('hello');
// })

// app.get('/profile', (req,res) => {

// 	res.send('getting...');
// })

// app.post('/profile', (req,res) => {
// 	console.log(req.body)
// 	const user = {
// 		name:"j",
// 		hobby:'s'
// 	}
// 	res.send(user);

// })


app.listen(3000);