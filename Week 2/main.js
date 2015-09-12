$(document).ready(function(){
  /* Tabs Action */
  $('#tabs p:not(:first)').hide();

  $('#tabnav li').click(function(e){
    e.preventDefault();
      $('#tabs p').hide;

        $('#tabnav .current').removeClass("current");
          $(this).addClass('current');
            var clicked = $(this).find('a:first').attr('href');

              $('#tabs ' + clicked).fadeIn('fast');
  }).eq(0).addClass('current');
});
