// Front end logic
$(document).ready(function(){
  $("#player1").submit(function(event){
    event.preventDefault();
    var player1 = $("#name1").val();
    $("#p1").text(player1);
    this.reset();
  });
  $("#player2").submit(function(event){
    event.preventDefault();
    var player2 = $("#name2").val();

    $("#p2").text(player2);
    this.reset();
  });

});
