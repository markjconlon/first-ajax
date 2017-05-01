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
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // dataType: 'html',
    }).done(function(data) {
      $('#step3456').append(data);
      console.log('Hey that worked!');
    }).fail(function(jqXHR, textStatus){
      console.log('.ajax Failed with ' + jqXHR.status + ' ' + jqXHR.statusText);
      $('#step3456').append("Sorry we will try harder next time.");
    }).always(function (){
      console.log('Hey the request finished!');
    });
  });

  $('#runAJAXcount').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      // dataType: 'html',
    }).done(function(data) {
      $('#step7').append(data);
      console.log('Hey that worked!');
    });
  });

  $('#runAJAXtime').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone: 'Europe/Sofia'}
    }).done(function(data) {
      $('#step8').append(data);
      console.log('Hey that worked!');
    });
  });
});
