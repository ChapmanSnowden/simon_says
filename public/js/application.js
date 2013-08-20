$(document).ready(function(){
  $('#get_color').on('click', function(e){
    e.preventDefault();
    var request = $.ajax({
      url: "/color",
      type: "post"
    });

    request.done(function(response){
      var json_response = $.parseJSON(response);
      console.log(json_response);
      $("ul li:nth-child("+json_response.cell+")").css('background-color', json_response.color);
    });
  });
});
