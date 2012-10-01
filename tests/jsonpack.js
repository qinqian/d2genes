function showCar() {   
    var carr = new Car("Dodge", "Coronet R/T", 1968, "yellow");   
    alert(carr.toJSONString());   
}
function Car(make, model, year, color) {
     this.make  =  make;   
     this.model  =  model;   
     this.year  =  year;   
     this.color  =  color;   
}
