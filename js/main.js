(function() {
  var animations = ['rollIn','bounceInDown'];
  var alternatives = ['pile','face']; 
  var titles = ['Pile ou Face ?', 'Face ou Pile ?'];
  //choose the animation when we are loading the page
  var rand = Math.random()*2;
  $('#coin').addClass(animations[parseInt(rand)]);
  //choose the first value of the coin
  rand = Math.random()*2;
  $('.front').addClass(alternatives[parseInt(rand)]);
  //choose the title with a random value
   rand = Math.random()*2;
  $('h1').text(parseInt(titles[rand]));
})();
