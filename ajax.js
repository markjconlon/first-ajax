$(document).ready(function () {

  $('#runAJAX').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'html',
    }).done(function(data) {
      $('body').append(data);
    });
  });

  $('#runAJAXping').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      // dataType: 'html',
    }).done(function(data) {
      $('#step3456').append(data);
    }).fail(function(jqXHR, textStatus){
      console.log('.ajax Failed with ' + jqXHR.status + ' ' + jqXHR.statusText);
      $('#step3456').append("Sorry we will try harder next time.");
    });
  });
});
