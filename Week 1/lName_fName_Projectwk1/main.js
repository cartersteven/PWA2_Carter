/*
Description: Project 1: Manipulating the DOM
Author: Steven Carter | 0004502683
Date: 4 September 2015
*/

$(document).ready(function(){    /*Function only activates if the DOM is complete*/
  console.log("~~~~~START OF TARGET 1~~~~~");/*Start Target 1*/

  $('#contentleft > ul').css('backgroundColor', 'orange');    /*Changes the background color of the links list to orange*/

  var positionViaOffset = $('#contentleft > ul').offset();/*Sets the position of the left side UL (using offset()) to the variable positionViaOffset*/
  console.log("The top position via offset is left: " + positionViaOffset.left + ", top: " + positionViaOffset.top); /*Logs the positon to the console.*/

  var positionViaPosition = $('#contentleft > ul').position();/*Sets the position of the left side UL (using position()) to the variable positionViaPosition*/
  console.log("The top position via position is left: " + positionViaPosition.left + ", top: " + positionViaPosition.top);/*Logs the positon to the console.*/

  console.log("~~~~~END OF TARGET 1~~~~~");/*End Target 1*/
  console.log("");
});
