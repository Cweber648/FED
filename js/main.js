$(document).ready(function () {
  //your code here
  console.log("Hello World")
  $('#image_2').hide();

  setInterval(function() {
    $("#image_1").fadeOut(1000)
    $("#image_2").fadeIn(1000)
    .end()
    .prependTo('#image_1')
  }, 3000);

  $("#about_us_links").hide();
  $("#about_us").on("click", function(){
    $("#about_us_links").show();
  })

   $("#service_links").hide();
  $("#service").on("click", function(){
    $("#service_links").show();
  })

   $("#shop_links").hide();
  $("#shop").on("click", function(){
    $("#shop_links").show();
  })

})

