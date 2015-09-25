$(document).ready(function(){

    
    //Drag and drop code
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    
    //Date Picker Code
    $( "#datepicker" ).datepicker();

    //Modal
    $( "#dialog" ).hide();
    $("#modalActivate").on("click",function() {
        $( "#dialog" ).dialog();
    });
    $("#modalCancel").on("click",function() {
        $( "#dialog" ).dialog( "close" );
    });
    
    //Accordion
    $("#adiv").accordion();
    
});