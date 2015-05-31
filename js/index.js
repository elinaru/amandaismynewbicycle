function init() {
  var idx = Math.floor(Math.random() * PHRASES.length);
  var phrase = PHRASES[idx] || 'is your new bicycle';
  $('#content').append(phrase);
}

$(document).ready(init);
