$(document).ready(function() {
  $('#genesub').click(function(e) {
    e.preventDefault();
    var genesl=$('#genes').val().split('\n');
    var species=$('#species').val();
    genesl.Ucase();
    alert(species);
  });
});

$(document).ready(start);
  function start(){
  $("#container").html("<p>Hello world,,,</p>");
}

$(document).ready(function () {
  $("p").hide(5000);
});

$("#genesub").click(function(){
  $("p").toggle(2000, function(){});
});

// jquery return value
jQuery.fn.extend({
    getd1: function( args ) {
            attributes = "test";
            return attributes;
    }
});

var a1 = $(this).getd1();

jQuery.fn.MyFunction = function() {
    return this.each(function() {
        return "abc";
    });
}; // object return
jQuery.fn.AnotherFunction = function() {
    return "Hello World";
};

var MyFunctionResult = $(document).MyFunction();
var AnotherFunctionResult = $(document).AnotherFunction();

alert(AnotherFunctionResult);
  
Array.prototype.Ucase=function()
{
for (i=0;i<this.length;i++)
  {
  this[i]=this[i].toUpperCase();
  }
};
// useful example;  
// function UFunction()
// {
//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
//   fruits.Ucase();
//   var x=document.getElementById("demo");
//   x.innerHTML=fruits;
// }
// document.getElementById("genes").onclick=function(){UFunction();};