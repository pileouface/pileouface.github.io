(function() {
  var animations = ['rollIn','bounceInDown'];
  var alternatives = ['pile','face']; 
  //choose the animation when we are loading the page
  var rand = Math.random()*2;
  $('#coin').addClass(animations[parseInt(rand)]);
  //choose the first value of the coin
  rand = Math.random()*2;
  $('.front').addClass(alternatives[parseInt(rand)]);
})();
