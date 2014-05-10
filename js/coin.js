/*
  main script
 */

//enable the click on the coin
enableClick();

/*
  functions 
*/

//enable click on the coin
function enableClick() {
  //event for the click
  $('#flip').bind('click',doFlip);
}

//do a coin flipping 
function doFlip() {
  $('.front').addClass('flip');
  disableClick();
  setTimeout(function() {
      resetCoin();
      setPileOuFace();
  },100);
}

//disable click during the animation
function disableClick() {
  $('#flip').unbind('click',doFlip);
}

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

//choose a random number
function pileOuFace() {
  var alea = Math.random()*2;
  return (parseInt(alea) == 1 );
}

//event at the end of the animation
$('#coin').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.flip').removeClass('flip');
    enableClick();
});
