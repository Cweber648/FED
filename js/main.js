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

  $("#about_us").on("click", function(){
    $("#about-us-panel").toggle(function() {
      $(this).css('height', '140px')
    })
  })

    $("#service").on("click", function(){
      $("#service-panel").toggle(function() {
      $(this).css('height', '140px')
    })
  })

 $("#shop").on("click", function(){
  $("#shop-expander").toggle(function() {
    $(this).css('height', '140px')
    })
  })
})

