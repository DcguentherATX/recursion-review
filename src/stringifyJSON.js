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
  // loop thru the array
  // check each element with recursion 
  //  '[1 , false, "hello" ]'
  // result = result + ',' + 
 //return '[' + result + ']' + "'"
  
  let results = [];

  if(Array.isArray(obj)){
    if(obj[0] === undefined) {
      return '[]';
    } else {
      obj.forEach(element => {
        results.push(stringifyJSON(element));
      });
      return "[" + results + "]";
    }
  }
  if(typeof obj === 'object') {
    for(var key in obj){
      if(obj[key] !== undefined && typeof obj[key] !== 'function'){
        var newKey = '"' + key + '"';
        results.push(newKey + ':' + stringifyJSON(obj[key]))
      }
    }
    return '{' + results + '}';


    // var keys = Object.keys(obj);
    // keys.forEach(key => {
    //   var value = obj[key];
    //   var prop = '"' + key + '":';

    //   if(value === undefined) {
    //     return '{}';
    //   } else if (typeof value === 'function') {
    //     results.push(''); 
    //   } else if (typeof value === 'string') {
    //     results.push(prop + '"' + value + '"');
    //   } else if (typeof value === 'boolean' || typeof value === 'number' || typeof value === null) {
    //     results.push(prop + value); 
    //   } else if (typeof value === 'object') {
    //     results.push(prop + stringifyJSON(value));
    //   }
    // });
    // return '{' + results + '}';
    //loop through obj
    //if key is string, just make sure it stays a string
  }
};


// obj
