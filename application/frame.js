function data2frame(w){
  // get gene list from left frame
  w[0].document.getElementById("genesub").onclick = function () {
    var genes= w[0].document.getElementById("genes").value;
    genes = genes.split("\n");
    genes.Ucase();
    table(w[2], genes, 'genes');
    var geneids=getj(genes);
    table(w[1], geneids[0], 'geneids');
    clickview(geneids, genes, w);
  };
};

function getj (genes) {
  var geneids = new Array();
  var genesmatch = new Object();
  $.getJSON("/Users/qinqianhappy/codes/d2genes/application/json/d2genesOrg.json", null,
            function(data, status){ // absolute path, need change
              $.each(data, function(entryIndex, entry) {
                genesmatch = data;
                for (var i=0;i<genes.length;i++){
                  if (entry.hasOwnProperty(genes[i])){
                    // ! undefined or null
                    if (geneids.indexOf(entryIndex) == -1) { // get rid of replicates ids
                      geneids.push(entryIndex);
                    }
                  }
                }
              }
            );
            });
  alert(genesmatch);
  return [geneids, genesmatch];
  // return {_genesid: geneids, _genesmatch: genesmatch};
};

String.prototype.template = function()
{
  var args = arguments; // input array or other iterable
  return this.replace(/\{(\d+)\}/g,function(m,i)
                      {
                        return args[i];
                      }
                     );
};

function table(w, content, tag) {
  var genetags = w.document.getElementById(tag);
  var genetable="";
  var genethtem = "<table><th> {0} </th>";
  var genetdtem = '<tr><td id="{0}"> {1} </td></tr>';
  genetable += genethtem.template(tag);
  for (var i=0;i < content.length; i++) {
    genetable += genetdtem.template(content[i], content[i]);
  };
  genetable += "</table>";
  genetags.innerHTML = genetable;
}

function clickview(geneids, genes, w) {
  var geneidc = new Array();
  for (var i=0; i < geneids.length; i++){
    for (var j=0; j < genes.length; j++) {
      w[1].document.getElementById(geneids[i]).onclick = function() {clickstyle(w[2], genes);};
    }
  }
}

function clickstyle(w, genes){
  for (var i=0; i<genes.length; i++) {
    
    // w.document.getElementById(genes[i]).style.background-color=red;
  }
}

Array.prototype.Ucase=function()
{
  for (var i=0;i<this.length;i++)
  {
    this[i]=this[i].toUpperCase();
  }
};
