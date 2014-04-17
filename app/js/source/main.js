(function(){
  'use strict';

  $(document).ready(initialize);

  var clock = 60;
  var timer;

  function initialize(){
    $('#start').click(start);
    $('#shuffle').click(populate);
  }

  function start(){
    // timer = setInterval(updateClock, 100);
    var $td = $('#game > tbody > tr > td');
    var count = $td.length;

    for(var i=0; i<count; i++){
      var $img=$('<img>');
      var num = Math.floor(Math.random()*20)+1;
      var td=$td[i];
      $(td).append($img);
      $img.attr('src', '../media/cat'+num+'.png');
    }
  }

  function updateClock(){
    clock--;
    $('#timeDisplay').text(clock);
    if(clock === 0){
      clearInterval(timer);
    }
  }

  function populate(){
    debugger;
    timer = setInterval(updateClock, 1000);
    var shuffled=[];
    var $td = $('#game > tbody > tr > td');
    var count = $td.length;
    while(count > 0){
      var num = Math.floor(Math.random()*count);
      shuffled.push($td.splice(num, 1)[0]);
      count=$td.length;
    }
    start();
  }

}());
