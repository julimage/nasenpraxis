// Toggler Script Imprint

$(document).ready(function(){
  var $content = $("#imprint").hide();
  $(".toggler-right-down").on("click", function(e){
    $(this).toggleClass("toggler-right-down toggler-right-up");
    $content.slideToggle();
  });
});