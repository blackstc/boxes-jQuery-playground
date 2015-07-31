$(document).ready(function() {
  console.log("hello world");

//Solutions for exercise 2
  // $("#secretBox").css("background-color", "white");
  // $("#secretBox").append("<h1>secret box!</h1>");
  // $("#row1 div").addClass("boxType3");
  // $("#row4").find("div").eq(3).hide();
  // $(".boxType1").css("background-color", "white");
  // $("#row2 :lt(2)").removeClass("box boxType2 boxType3");
  // $('div').not(".row").not("#container").not("#secretBox").css("width", "2px");

//Solutions for exercise 3
  $('#container').on("click", function(x) {
    var offset = $(this).offset();
    var relativeX = (x.pageX - offset.left);
    var relativeY = (x.pageY - offset.top);

    console.log('X: ' + relativeX + " Y: " + relativeY);

  });

});
