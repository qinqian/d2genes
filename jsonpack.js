function showCar() {   
    var carr = new Car("Dodge", "Coronet R/T", 1968, "yellow");   
    // alert(carr.toJSONString());
    alert(1);
}
function Car(make, model, year, color) {
     this.name  =  make;   
     this.model  =  model;   
     this.year  =  year;   
     this.color  =  color;
     this.changename = changename;
  function changename(name){
      this.name=name;
  }
}
// # events
function mOver(obj)
{
  obj.innerHTML="Thank You";
}
function mOut(obj)
{
  obj.innerHTML="Mouse Over Me";
}
function mDown(obj)
{
  obj.style.backgroundColor="#1ec5e5";
  obj.innerHTML="Release Me";
}
function mUp(obj)
{
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}
var JSONObject= {
  name:"John Johnson",
  "street":"Oslo West 555", 
  "age":33,
  "phone":"555 1234567"};
var txt = '{ "employees" : [' +
      '{ "firstName":"John" , lastName:"Doe" },' +
      '{ "firstName":"Anna" , "lastName":"Smith" },' +
      '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = eval ("(" + txt + ")");
document.getElementById("json1").innerHTML=obj.employees[1].lastName;
document.getElementById("jname").innerHTML=JSONObject.name ;
document.getElementById("jage").innerHTML=JSONObject.age ;
document.getElementById("jstreet").innerHTML=JSONObject.street ;
document.getElementById("jphone").innerHTML=JSONObject.phone ;
