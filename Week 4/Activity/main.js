$(document).ready(function(){

    
    //Drag and drop code
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    
    //Date Picker Code
    $( "#datepicker" ).datepicker();

    //Modal
    $('.modalClick').on("click", function(e){
        e.preventDefault();
        $('#overlay')
          .fadeIn()
          .find('#modal')
          .fadeIn();
          console.log("open");
    });

    $('.close').on('click', function(e){
        e.preventDefault();
        $('#overlay')
          .fadeOut()
          .find('#modal')
          .fadeOut();
          console.log("close");
    });

});