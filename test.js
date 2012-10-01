document.getElementById("bodyload").onload=function(){checkCookies();};
document.getElementById("butdate").onclick=function(){displayDate();};
document.getElementById("butdata").onclick=function(){readjson(a);};
  
var a=
{
    "employees": {
        "firstName": "John", 
        "lastName": "Doe"
    }, 
    "employees1": {
        "firstName": "Peter", 
        "lastName": "Jones"
    }
};
// var z=JSONparse(a); // new parse method using json.parse

function displayDate()
{
  document.getElementById("demo").innerHTML=Date();
};

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
