$("#change").click(function() {
  $("#change").html("<a onclick='acerto()'>Sim</a>");
  $("#move").show();
});

$("#move").hover(function() {
  change();
});

function acerto() {
  alert("Acerto Miseravi");
}

function change()
{
    var i = Math.floor(Math.random()*300)+1;
    var j = Math.floor(Math.random()*400)+1;
    $("#move").css({top: j+'px',left: i+'px'});
}