(function(){
  'use strict';

  $(document).ready(initialize);

  var clock = 60;
  var timer;

  function initialize(){
    $('#start').click(start);
    // $('#shuffle').click(populate);
  }

  function start(){
    clearInterval(timer);
    timer = setInterval(updateClock, 100);
    var $td = $('#game > tbody > tr > td');
    var count = $td.length;

    for(var i=0; i<count; i++){
      var $img=$('<img>');
      // var num = Math.floor(Math.random()*count)+1;
      // var td=$td[i];
      var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      var shuffledArray = array.randomize();
      var newNum = shuffledArray.indexOf(0);
      array.shift();
      $img.attr('src', '../media/cat'+newNum+'.png');
    }
  }



  function updateClock(){
    clock--;
    $('#timeDisplay').text(clock);
    if(clock === 0){
      clearInterval(timer);
    }
  }

  // function populate(){
  //   timer = setInterval(updateClock, 1000);
  //   var shuffled=[];
  //   var $td = $('#game > tbody > tr > td');
  //   var count = $td.length;
  //   while(count > 0){
  //     var num = Math.floor(Math.random()*count);
  //     shuffled.push([0]);
  //     $td.splice(num, 1);
  //     count=$td.length;
  //
  //   }
  // }



  function randomize(){
    for(var i=0; i < $td.length; i++){
      var number = Math.floor(Math.random()*20)+1;
      var temp = array[number];
      numbers[number]=number[i];
      numbers[i]=temp;
    }
  }
}());
