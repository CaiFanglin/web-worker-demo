onmessage = function(event){
	var intArray = new Array(10000);

	for(var i=0;i<10000;i++){
		intArray[i] = parseInt(Math.random() * 10000);
	}
	var worker = new Worker("filter.js");
	worker.postMessage(JSON.stringify(intArray));
	worker.onmessage = function(event){
		postMessage(event.data);
	}		
}
