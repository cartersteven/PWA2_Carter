$(document).ready(function(){
    $("#date").datepicker();
    $("#newitemform").hide();

    //Start click event for add item button

    $(".close").button({
      icons: {
        primary: "ui-icon-circle-close"
      }
    });

    $("#additem").button({
      icons: {
        primary: "ui-icon-circle-plus"
      }
    }).click(function() {
      $("#newitemform").dialog("open");
    });//End click event for add item button

    //Start definition of dialogbox
    $("#newitemform").dialog({
      width: 350,
      height: 300,
      modal: true,
      autoOpen: false,
      close: function() {
        $("#newitemform input").val("");
      },
      buttons : {
        "Add Task" : function() {
          var taskName = $("#task").val();
          var dueDate = $("#date").val();

          var beginLi = '<li><button class="done">Done</button><button class="delete">X</button>';
          var taskLi = '<span class="task">' + taskName + '</span>';
          var dateLi = '<span class="due-date">' + dueDate + '</span>';
          var endLi = '</li>';

          $("#unfinishedList").prepend(beginLi + taskLi + dateLi + endLi);
          $("#unfinishedList").hide().slideDown(250).find('li:first').animate({
            'background-color' : 'rgb(255,255,204)'
          },250).animate({
            'background-color' : 'white'
          },750).animate;
          $(this).dialog('close');
        },
        "Cancel" : function() {
          $(this).dialog('close');
        }
      }
    });//End definition for dialog box

    $( "#unfinishedList, #finishedList" ).disableSelection();

    $( "ul.droptrue" ).sortable({
      connectWith: "ul",
      dropOnEmpty: true
    });

    //Mark item as complete
    $("#unfinishedList").on('click', '.done', function() {
      var taskItem = $(this).parent('li');
        taskItem.slideUp(250, function() {
          var $this = $(this);
            $this.detach();
              $("#finishedList").prepend($this);
                $this.slideDown();
        });
    });//End Mark Item as complete

    //Mark item as incomplete
    $("#finishedList").on('click', '.done', function() {
      var taskItem = $(this).parent('li');
        taskItem.slideUp(250, function() {
          var $this = $(this);
            $this.detach();
              $("#unfinishedList").prepend($this);
                $this.slideDown();
        });
    });//End Mark Item as incomplete



    //Make lists Sortable
    $(".sortlist").sortable({
      connectWith : '.sortlist',
      cursor : 'pointer',
      placeholder : 'ui-state-highlight',
      cancel : '.delete,.done'
    });//End list sortable

    //Delete
    $(".sortlist").on('click', '.delete', function() {
      $(this).parent('li').effect('puff', function() {
        $(this).remove();
      });
    });//Delete

    $('#savebtn').click(function() {
                var saveit = $('#calendar').fullCalendar( 'clientEvents');

        var eventsholded = [];

    $.each(saveit, function(index,value) {
        var event = new Object();
        event.id = value.id;
        event.start = value.start;
        event.end = value.end;
        event.title = value.title;
    event.allDay = value.allDay
        eventsholded.push(event);
    });

    $.ajax
    ({
        type: "GET",
        dataType : 'json',
        async: false,
        url: 'http://your.host/save_json.php',
        data: { data: JSON.stringify(eventsholded) },
        success: function () {alert("Thanks!"); },
        failure: function() {alert("Error!");}
    });

});
