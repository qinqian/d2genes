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
    // alert($(this).attr('id'));
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
                // get input replicates gene symbol and remove spaces by jquery trim
                $.each(genes_list, function(i, el){
                  if ($.inArray($.trim(el), uniquegenes) === -1) uniquegenes.push($.trim(el));
                });
                table(uniquegenes, "genes");
                var geneids = new Array();

                // remove duplicates searched datasetids
                $.each(data, function(entryIndex, entry){
                  // entryIndex -> dataset id
                  // entry -> {'geneA': score, 'geneB': score,...}
                  var geneid = $(document).get_remove_data(uniquegenes, entry, entryIndex);
                  if (geneid != '') geneids.push(geneid);
                });
                table(geneids, 'datasetids');
                $.each(geneids, function(index, content){
                  $('#'+content).mouseover(function(){
                    // $(this).addClass('highlight');
                    $('#'+content).css({'color':'teal', 'background': 'yellow', 'cursor': 'pointer'});
                  });

                  $('#'+content).mouseout(function(){
                    // $('#'+content).removeClass('highlight');
                    $('#'+content).css({'color':'black', 'background': 'white'});
                    $('.idcss').css({'color':'white', 'background': 'blue'});
                  });
                  $('#'+content).click(function(){
                    if ($(this).attr('class')!='idcss') {
                      $(this).addClass('idcss');
                      $('.idcss').css({'color':'white', 'background': 'blue'});
                      $.each(uniquegenes, function(geneindex, genecontent){
                        if (data[content].hasOwnProperty(genecontent)){
                          var genecss=$('#'+genecontent);
                          if (genecss.attr('class') != 'genes'){
                              genecss.addClass('genes');
                              $(".genes").each(function(){
                                $(this).css({'background':'rgb(255,0,0)', 'color': 'white', 'cursor': 'pointer'});
                            });
                          }
                      // odd and even row has different styles 
                      // $('#USP16').css({'color': 'red', 'background': 'blue'}); // td even row color
                      // $('td:odd').css({'color': 'blue', 'background': 'red'}); // td even row color
                      // TODO
                     // $('#genecontent td').cluetip({}) // tooltip from jQuery
                     // $('table.sortable).tablesorter();
                      }});
                      }
                    else{
                     $(this).removeClass('idcss');
                     $.each(uniquegenes, function(geneindex, genecontent){
                       // debug: 10/28 22:17:45 2012, remove class and change previous css together 
                       $('#'+genecontent).removeClass('genes'); 
                       $('#'+genecontent).css({'background':'white', 'color': 'black', 'cursor': 'pointer'});
                     });
                   }
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
