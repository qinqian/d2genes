function data2frame(w){
  // get gene list from left frame
  w[0].document.getElementById("genesub").onclick = function () {
     // w[0].document.write('<p>' + "hello" + '</p>');
    var genes= w[0].document.getElementById("genes").value;
    genes = genes.split("\n");
    // genes.Ucase();
    var genetags = w[2].document.getElementById("genes");
    var genetable="";
    genetable += "<table><th>genes</th>";
    // for (i in genes){}  // this encounters ucase problem
    for (var i=0;i < genes.length; i++) {
      genetable += '<tr><td class="up">' + genes[i] + '</td></tr>';
    };
    genetable += "</table>";
    alert(genetable);
    genetags.innerHTML = genetable;
}
;};
Array.prototype.Ucase=function()
{
for (var i=0;i<this.length;i++)
  {
  this[i]=this[i].toUpperCase();
  }
};