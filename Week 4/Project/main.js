$(document).ready(function(){
    $("#date").datepicker();
    $("#newitemform").hide();

    //Start click event for add item button
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

          var beginLi = '<li><span class="done"></span><span class="delete">X</span>';
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
        "cancel" : function() {
          $(this).dialog('close');
        }
      }
    });


});
