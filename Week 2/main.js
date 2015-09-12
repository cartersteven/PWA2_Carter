$(document).ready(function(){
  /* Tabs Action */
  $('#search').hide();

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

    /* Tooltip */
    $('.masterTooltip').hover(function(){
      var title = $(this).attr('title');
      $(this).data('tiptext', title).removeAttr("title");
      $('<p class="tooltip"></p>')
      .text(title)
      .appendTo('body')
      .fadeIn('slow');
    }, function(){
      $(this).attr('title', $(this).data('tipText'));
      $('.tooltip').remove();
    }).mousemove(function(e){
      var mousex = e.pageX + 20;
      var mousey = e.pageY + 10;
      $('.tooltip')
      .css({top:mousey, left:mousex})
    });
});
