console.log('meow');
function init() {
  var PHRASES = [
    'is my new bicycle',
    'picked you up at the airport',
    'told me to tell you hello',
    'thinks you are cute',
    'bookmarked your website'
  ];

  var idx = Math.floor(Math.random() * PHRASES.length);
  console.log(idx);
  $('#content').append('<span>Amanda ' + PHRASES[idx] + '</span>');
  console.log('ok');
}
$(document).ready(init);
