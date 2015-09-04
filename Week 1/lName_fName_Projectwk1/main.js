/*
Description: Project 1: Manipulating the DOM
Author: Steven Carter | 0004502683
Date: 4 September 2015
*/

$(document).ready(function(){    /*Function only activates if the DOM is complete*/
  console.log("~~~~~START OF TARGET 1~~~~~");/*Start Target 1*/

    $("#contentleft > ul").css("backgroundColor", "orange");    /*Changes the background color of the links list to orange*/

    var positionViaOffset = $("#contentleft > ul").offset();/*Sets the position of the left side UL (using offset()) to the variable positionViaOffset*/
    console.log("The top position via offset is left: " + positionViaOffset.left + ", top: " + positionViaOffset.top); /*Logs the positon to the console.*/

    var positionViaPosition = $("#contentleft > ul").position();/*Sets the position of the left side UL (using position()) to the variable positionViaPosition*/
    console.log("The top position via position is left: " + positionViaPosition.left + ", top: " + positionViaPosition.top);/*Logs the positon to the console.*/

  console.log("~~~~~END OF TARGET 1~~~~~");/*End Target 1*/
  console.log(" ")




  console.log("~~~~~START OF TARGET 2~~~~~");/*Start Target 2*/
  console.log("No console events in Target 2.");

    $("#contentleft > ul > li").eq(1).css("marginLeft", "30px");/*Changed the left margin of the second list item to 30px*/

  console.log("~~~~~END OF TARGET 2~~~~~");/*End Target 2*/
  console.log(" ")




  console.log("~~~~~START OF TARGET 3~~~~~");/*Start Target 3*/

    $("#contentleft > ul > li").eq(3).css("color", "red");/*Set the last LI to a font color of red*/

    var notLinkWidth = $("#contentleft > ul > li").filter(":last").width();/*Set a variable called notLinkWidth to the width of the final LI, which is not a link.*/
    console.log("The width of the fourth list item is " + notLinkWidth + ".");/*logged the width of the fourth list item to the console.*/

  console.log("~~~~~END OF TARGET 3~~~~~");/*End Target 3*/
  console.log(" ")




  console.log("~~~~~START OF TARGET 4~~~~~");/*Start Target 4*/



  console.log("~~~~~END OF TARGET 4~~~~~");/*End Target 4*/
  console.log(" ")
});
