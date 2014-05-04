//event for the click
$('#flip').on('click',function(e){
  $('.front').addClass('flip');
  setTimeout(function() {
      resetCoin();
      setPileOuFace();
  },100);
});

//event at the end of the animation
$('#coin').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.flip').removeClass('flip');
});

//remove face and pile css classes
function resetCoin() {
  $('#coin .front').removeClass('face');
  $('#coin .front').removeClass('pile');  
}

//pick a random number and choose between tails and heads
function setPileOuFace() {
  if(pileOuFace())
    $('#coin .front').addClass('pile');
  else
    $('#coin .front').addClass('face');
}

//choose the random number
function pileOuFace() {
  var alea = Math.random()*1;
  return (alea > 0.1 );
}
