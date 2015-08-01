$(document).ready(function() {
  console.log("hello world");

//Solutions for exercise 2
  //question 1
  // $("#secretBox").css("background-color", "white");
  // $("#secretBox").append("<h1>secret box!</h1>");

  //question 2
  // $("#row1 div").addClass("boxType3");

  //question 3
  // $("#row4").find("div").eq(3).hide();

  //question 4
  // $(".boxType1").css("background-color", "white");

  //question 5
  // $("#row2 :lt(2)").removeClass("box boxType2 boxType3");

  //question 6
  // $('div').not(".row").not("#container").not("#secretBox").css("width", "2px");

//Solutions for exercise 3
  //question 1
  // $('#container').on("click", function(x) {
  //   var offset = $(this).offset();
  //   var relativeX = (x.pageX - offset.left);
  //   var relativeY = (x.pageY - offset.top);
  //   console.log('X: ' + relativeX + " Y: " + relativeY);
  // });

  //question 2
  // $("div .boxType1").append("<a href='students.galvanize.com/'>Galvanize Link</a>");
  // $("div .boxType1").on("click", "a", function() {
  //   $(this).attr("href", "");
  //   alert("You can never leave this page!");
  // });

  //question 3
  // $('.box').on("click", function() {
  //   $(this).append("<img src='https://s-media-cache-ak0.pinimg.com/736x/6f/e0/95/6fe09532fea07874bfb1b0c32212fbe0.jpg'>");
  // });
  // $('.box').on("click", "img", function(e) {
  //   $(this).remove();
  //   e.stopPropagation();
  // });

  //question 4
  // $("#container").on("click", ".box", function(e) {
  //   $(this).css("background-color", "white");
  //   $("#container").css("background-color", "black");
  //   e.stopPropagation();
  // });

  // $("#container").on("click", function() {
  //   $(this).css("background-color", "lime");
  // });


});
