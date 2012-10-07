function data2frame(w){
  // get gene list from left frame
  w[0].document.getElementById("genesub").onclick = function () {
    var genes= w[0].document.getElementById("genes").value;
    genes = genes.split("\n");
    genes.Ucase();
    table(w[2], genes, 'genes');
    var geneids=getj(genes);
    table(w[1], geneids, 'geneids');
    alert('after'+geneids);
    // var geneidtags=w[1].document.getElementById("geneids");
    // geneidtags.innerHTML = geneids;
    function getj (genes) {
      var geneids = new Array();
      $.getJSON("/Users/qinqianhappy/codes/d2genes/application/json/d2genesOrg.json", null,
                function(data, status){ // absolute path, need change
                  $.each(data, function(entryIndex, entry) {
                    // alert('index' + entryIndex);
                    // alert('attr' + entry.ABT1);
                    for (var i=0;i<genes.length;i++){
                      if (entry.hasOwnProperty(genes[i])){
                        // ! undefined or null
                        geneids.push(entryIndex);

                      }
                    }
                  }
                );
        });
      alert('here'+geneids);
      return geneids;
    };
    // return genes;
  };
};

function table(w, content, tag) {
  var genetags = w.document.getElementById(tag);
  var genetable="";
  genetable += "<table><th>"+ tag+"</th>";
  // for (i in genes){}  // this encounters ucase problem
  for (var i=0;i < content.length; i++) {
    genetable += '<tr><td class="up">' + content[i] + '</td></tr>';
  };
  genetable += "</table>";
  genetags.innerHTML = genetable;
}

Array.prototype.Ucase=function()
{
  for (var i=0;i<this.length;i++)
  {
    this[i]=this[i].toUpperCase();
  }
};
