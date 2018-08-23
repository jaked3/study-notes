const promise = new Promise((resolve,reject) =>{
	if(true){
		resolve('stuff worked');
		reject('error, broken')
	}
	
})
const promise2 = new Promise((resolve,reject)=>{
	setTimeout(resolve,100, 'hiii')
})
const promise3 = new Promise((resolve,reject)=>{
	setTimeout(resolve,10000, 'i')
})

Promise.all([promise2, promise3])
.then (values =>){
	console.log(values);
}

promise.then(result=> result + '!')
.then(result2=>{
	throw Error
	console.log(result2);
})

.catch(() => console.log('error!'))