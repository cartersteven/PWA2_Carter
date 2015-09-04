/*
Description: Project 1: Manipulating the DOM
Author: Steven Carter | 0004502683
Date: 4 September 2015
*/

$(document).ready(function(){    /*Function only activates if the DOM is complete*/
  console.log("START OF TARGET 1");/*Start Target 1*/

  $('#contentleft > ul').css('backgroundColor', 'orange');    /*changes the background color of the links list to orange*/

  var positionViaOffset = $('#contentleft > ul').offset();
  console.log("The top position via offset is left: " + positionViaOffset.left + ", top: " + positionViaOffset.top);

  
});
