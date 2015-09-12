$(document).ready(function(){
  /* Tabs Action */
  $('#tabs p:not(:first)').hide();

  $('#aboutli').click(function(e){
    e.preventDefault();

      $('#content').children().hide('fast');
      $('#about').show('fast');
  });

  $('#searchli').click(function(e){
    e.preventDefault();

      $('#content').children().hide('fast');
      $('#search').show('fast');
  });
});
