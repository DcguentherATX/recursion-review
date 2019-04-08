// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // loop thru document body
  // check if there are children
  // loop thru tags
  // if tags class list contains class name
  // push node into array if matches our classname
  var nodes = [];
  var body = document.body;
  var list = body.classList;

  var helperFunc = function(node, className) {
      var nodeList = node.classList;
      for(var i = 0; i < nodeList.length; i++ ){
          if(nodeList[i] === className){
              nodes.push(node)
          }

      }
  }

  for (var i = 0; i < list.length; i++){
      if(list[i] === className){
          nodes.push(body);
      }
  }

  if(body.hasChildNodes()){
      helperFunc(body.childNodes, className)

  }


};

//document.body, element.childNodes, and element.classList
