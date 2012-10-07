// jquery
//   jQuery.get('path/to/file/on/server.txt', null, function(data, status) {  // file handle js
//     // your file contents are in 'data'
// });
// // # javascript
// var a=
// {
//     "employees": {
//         "firstName": "John", 
//         "lastName": "Doe"
//     }, 
//     "employees1": {
//         "firstName": "Peter", 
//         "lastName": "Jones"
//     }
// };
// // var z=JSONparse(a); // new parse method using json.parse
// jQuery event with Json file handle, is kind of Ajax communicate with server-side
// $(document).ready(function() {
//   alert("start");
//   $('#letter-b .button').click(function() {
//     $.getJSON('./application/json/d2genesOrg.json', function(data) {
//         $('#dictionary').empty();
//         var items = [];
//         $.each(data, function(key, val) {
//           items.push('<li id="' + key + '">' + val + '</li>');
//         });
//         $('<ul/>', {
//             // 'class': 'my-new-list',
//             html: items.join('nnn')
//             }).appendTo('frame[1].body');
//         });
      // for loop for Json array 
      // $.each(data, function(entryIndex, entry) {
      //   var html = '<div class="entry">';
      //   html += '<h3 class="term">' + entry['term'] + '</h3>';
      //   html += '<div class="part">' + entry['part'] + '</div>';
      //   html += '<div class="definition">';
      //   html += entry['definition'];
      //   if (entry['quote']) {
      //     html += '<div class="quote">';
      //     $.each(entry['quote'], function(lineIndex, line) {
      //       html += '<div class="quote-line">' + line + '</div>';
      //     });
      //     if (entry['author']) {
      //       html += '<div class="quote-author">' + entry['author'] + '</div>';
      //     }
      //     html += '</div>';
      //   }
      //   html += '</div>';
      //   html += '</div>';
      //   $('#dictionary').append(html);
      // });
//     });
// });
$(document).ready(function() {
  $('#letter-c .button').click(function() {
    $.getScript('./c.js');
  });
});

$(document).ready(function() {
  $('#loading').ajaxStart(function() {
    $(this).show();
  }).ajaxStop(function() {
    $(this).hide();
  });
});

document.getElementById("bodyload").onload=function(){checkCookies();};
document.getElementById("butdata").onclick=function(){readjson(a);};

function readjson(data) {
  var table1=new String();
  alert(1);
  table1='';
  table1 += '<table border="2" cellspadding="1">' + '<th>first</th><th>last</th>';
  for (i in data) {
    table1 += '<tr><td id="first">'+ data[i].firstName + '</td><td>'+data[i].lastName+'</tr>';
  };
  table1 += '</table>';
  alert(table1);
  document.getElementById("mytext").innerHTML=table1;
};

function checkCookies()
{
if (navigator.cookieEnabled==true)
{
  alert("Cookies are enabled");
}
else
{
  alert("Cookies are not enabled");
}
};

// exceptions
var txt="";
function message()
{
try
  {
  adddlert("Welcome guest!");
  }
catch(err)
  {
  txt="There was an error on this page.\n\n";
  txt+="Click OK to continue viewing this page,\n";
  txt+="or Cancel to return to the home page.\n\n";
  if(!confirm(txt))
    {
      document.location.href="http://www.google.com";
    }
  }
}
var x=prompt("Enter a number between 5 and 10:","");
try
{
if(x>10)
  {
  throw "Err1";
  }
else if(x<5)
  {
  throw "Err2";
  }
else if(isNaN(x))
  {
  throw "Err3";
  }
}
catch(err)
{
if(err=="Err1")
  {
  document.write("Error! The value is too high.");
  }
if(err=="Err2")
  {
  document.write("Error! The value is too low.");
  }
if(err=="Err3")
  {
  document.write("Error! The value is not a number.");
  }
};
