/*A. Anderson
Prof. M. Lynch
CSCI 39547
Assignment #2
Recreation of several common javascript methods without using the respective method for each function
*/

//Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that will take in an array of elements and executes any callback function on each of those elements.
function myEach(arr, call){
	for (let i=0; i<arr.length; i++){
		call(arr[i]);
	}
}

//Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and executes a callback function on each of those elements.
function myMap(arr, call){
	let temp=[];
	for(let i=0; i<arr.length; i++){
		temp[i]=call(arr[i]);
	}
	return temp;
}

//Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will take in an array of elements and executes a callback function on each of those elements.
function myFilter(arr,call){
	let newArr = [];
	for(let i=0; i<arr.length; i++){
	if(call(arr[i]))
	{
	newArr[i]=push.(arr[i]);
	}
	}
	return newArr;
}

//Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and executes a callback function on each of those elements.
function 
function mySome(arr,call){
	for(let i=0; i<arr.length; i++){
		if(call(arr[i])){
			return true;
		}
	return false;
}

//Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” that will take in an array of elements and executes a callback function on each of those elements.
function myEvery(arr,call){
	for(let i = 0; i < arr.length; i++){
		if (!call(arr[i})){
			return false;
		}
	}
	return true;
}

//Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of elements and executes a callback function on each of those elements.
function myReduce(arr,call){
	let sum = 0;
	for (let i=0; i<arr.length; i++){
		sum += call(arr[i]));
		}
	return sum;
}

//Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled “myIncludes” that will take in an array of elements and indicates whether or not a target element is contained within the input array. This returns a boolean.
function myIncludes(arr, val){
	for(let i=0; arr.length; i++){
	if((arr[i]==val))
	return true;
	}
	return false;
}

//Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
function myIndexOf(arr,val){
	var temp = -1;
	for (var i = 0; i<arr.length;i++){
			if(arr[i] == val){
		temp = i;
		}
	}
	return temp;
}

//Without using the native “Array.prototype.push” method of JavaScript, compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end of the array.
function myPush(arr,newKey){
	arr[arr.length] = newKey;
	return arr;
}

//Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myUnshift” (typo) that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
function myUnshift(arr, newKey){
	for(let i = arr.length; i>0; i--){
	if (arr[i] == newKey){
	return i;
	}
	return -1;
}

//Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object.
function grabKeys(obj){
let temp = [];
	for (const key in obj){
	myPush(temp,key);
	}
	return temp;
}

//Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object.
function grabValues(){
let temp = [];
	for (const key in obj){
	myPush(temp, obj[key]);
	}
	return temp;
}
