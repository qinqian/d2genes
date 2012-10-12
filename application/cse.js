function exception(){
    // no genes input
    // not supported gene id
    // species not support
  $("input[type=text], textarea").each(function(index){
    if ($(this).attr('value') === '') alert($(this).attr('id'));
  });
}
/*
   main function 
   get data from frame and write table with style color into iframe
   */
$(document).ready(function(){
  $("#genesub").click(function(e){
    alert($(this).attr('id'));
    e.preventDefault();
    $('#datasetids').empty();
    $('#genes').empty();
    var genes_list = $("#genesinput").val().split("\n");
    exception();
    genes_list.Ucase();
    var species = $('#species').val(); // test in human only now
    $.getJSON("./application/json/d2genesOrg.json", null,
              function(data, status) {
                var uniquegenes = new Array();
                // get input replicates gene symbol and remove spaces
                $.each(genes_list, function(i, el){
                  if ($.inArray($.trim(el), uniquegenes) === -1) uniquegenes.push($.trim(el));
                });
                table(uniquegenes, "genes");
                var geneids = new Array();
                $.each(data, function(entryIndex, entry){
                  // entryIndex -> dataset id
                  // entry -> {'geneA': score, 'geneB': score,...}
                  var geneid = $(document).get_remove_data(genes_list, entry, entryIndex);
                  if (geneid != '') geneids.push(geneid);
                });
                table(geneids, 'datasetids');
                $.each(geneids, function(index, content){
                  $('#'+content).click(function(evt){
                    $('#USP16').css({'color': 'red', 'background': 'blue'}); // td even row color
                // $('td:odd').css({'color': 'blue', 'background': 'red'}); // td even row color
                  });
                });
  });
  });
});

// get and remove duplicates data in an Object
$.fn.get_remove_data = function(input, searched, index) {
  var result = new String();
  for (var i=0; i< input.length; i++){
    if (searched.hasOwnProperty(input[i])) {
      result = index;
    };
  }
  return result;
};
function table(content, tag) {
  var genetags = $('#'+tag);
  var genetable="";
  genetable += "<table>";
  var genethtem='<th> {0} </th>';
  var genetdtem = '<tr><td id="{0}"> {1} </td></tr>';
  genetable += genethtem.template(tag);
  for (var i=0;i < content.length; i++) {
    genetable += genetdtem.template(content[i], content[i]);
  };
  genetable += "</table>";
  $('#'+tag).prepend(genetable); // append
}
function clickview(geneids, genematch, genes, w) {
  var geneidc = new Array();
  for (var i=0; i < geneids.length; i++){
    // for (var j=0; j < genes.length; j++) {
      // w[1].document.getElementById(geneids[i]).onclick = function() {clickstyle(w[2], genes);};
      w[1].document.getElementById(geneids[i]).onclick = function() {alert(genes);};
    // w[1].document.getElementById()
    }
  }
// function clickstyle(w, genes){
//   for (var i=0; i<genes.length; i++) {
//     // w.document.getElementById(genes[i]).style.background-color=red;
//   }
// }

/*
 string added prototype
 */
String.prototype.template = function()
{
  var args = arguments; // template, easy to format
  return this.replace(/\{(\d+)\}/g,function(m,i)
                      {
                        return args[i];
                      }
                     );
};
/*
 array added function
 */
var arrayIn = function(array,index){
  // judge index in array or not
  return(array.indexOf(index) === -1);
};
Array.prototype.Ucase=function()
{
  /* Upper Case an Array */
  for (var i=0;i<this.length;i++)
  {
    this[i]=this[i].toUpperCase();
  }
};
