// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if(obj === undefined) {
    return undefined;
  }
  if(obj === null){
    return 'null';
  }
  if(Array.isArray(obj)){
    let result = [];
    // loop thru the array
    // check each element with recursion 
    //  '[1 , false, "hello" ]'
    // result = result + ',' + 
   return '[' + result + ']' + "'"
  }
};



// array
// obj
