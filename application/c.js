var entries = [
  {
    "term": "CALAMITY",
    "part": "n.",
    "definition": "A more than commonly plain and unmistakable reminder that the affairs of this life are not of our own ordering.  Calamities are of two kinds:  misfortune to ourselves, and good fortune to others."
  },
  {
    "term": "CANNIBAL",
    "part": "n.",
    "definition": "A gastronome of the old school who preserves the simple tastes and adheres to the natural diet of the pre-pork period."
  }
]
var html = '';
$.each(entries, function() {
  html += '<div class="entry">';
  html += '<h3 class="term">' + this['term'] + '</h3>';
  html += '<div class="part">' + this['part'] + '</div>';
  html += '<div class="definition">' + this['definition'] + '</div>';
  html += '</div>';
});
$('#dictionary').html(html);