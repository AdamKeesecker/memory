(function(){
  'use strict';

  $(document).ready(initialize);

  var clock = 60;
  var timer;

  function initialize(){
    $('#start').click(start);
  }

  function start(){
    timer = setInterval(updateClock, 100);
    var $td = $('#game > tbody > tr > td');
    var count = $td.length;

    for(var i=0; i<count; i++){
      var $img=$('<img>');
      var num = Math.floor(Math.random()*20)+1;
      var td=$td[i];
      $(td).append($img);
      $img.attr('src', '../media/cat'+num+'.png');
    }
    populate();
  }

  function updateClock(){
    clock--;
    $('#timeDisplay').text(clock);
    if(clock === 0){
      clearInterval(timer);
    }
  }
// N is count I is num
  function populate(){
    var shuffled=[];
    var $td = $('#game > tbody > tr > td');
    var count = $td.length;
    while(count > 0){
      var num = Math.floor(Math.random()*count);
      shuffled.push($td.splice(num, 1)[0]);
      count=$td.length;
    }
  return shuffled;
  }

}());
