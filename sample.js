var cnt = 0;
var id1, id2, id3, id4;

function audio_play(){
  audio.play();
  audio.loop = true;
  if(cnt < 3){
    audio.playbackRate = 1/2;
  }
  else if(cnt < 33){
    audio.playbackRate = 1;
  }
  else if(cnt < 333){
    audio.playbackRate = 2;
  }
  else{
    audio.playbackRate = 3;
  }
}

function get_time(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var millisecond = date.getMilliseconds();
  return [hour, minute, second, millisecond];
}

function timer1(){
  var [hour, minute, second, millisecond] = get_time();
  time = hour+':'+minute+':'+second;
  document.getElementById('clock_area').innerHTML = time;
  // console.log('timer1 counter: '+cnt);
  cnt++;
  if (cnt >= 3){
    stop_timer1();
    audio.playbackRate = 1;
    start_timer2();
  }
}

function timer2(){
  var [hour, minute, second, millisecond] = get_time();
  millisecond = Math.floor(millisecond / 100);
  time = hour+':'+minute+':'+second+':'+millisecond;
  document.getElementById('clock_area').innerHTML = time;
  // console.log('timer2 counter: '+cnt);
  cnt++;
  if (cnt >= 33){
    stop_timer2();
    audio.playbackRate = 2;
    start_timer3();
  }
}

function timer3(){
  var [hour, minute, second, millisecond] = get_time();
  millisecond = Math.floor(millisecond / 10);
  time = hour+':'+minute+':'+second+':'+millisecond;
  document.getElementById('clock_area').innerHTML = time;
  // console.log('timer3 counter: '+cnt);
  cnt++;
  if (cnt >= 333){
    stop_timer3();
    audio.playbackRate = 3;
    start_timer4();
  }
}

function timer4(){
  var [hour, minute, second, millisecond] = get_time();
  time = hour+':'+minute+':'+second+':'+millisecond;
  document.getElementById('clock_area').innerHTML = time;
  // console.log('timer4 counter: '+cnt);
  cnt++;
  if (cnt >= 633){
    cnt = 0;
    stop_timer4();
    time = hour+':'+minute+':'+second;
    document.getElementById('clock_area').innerHTML = time;
    audio.playbackRate = 1/2;
    start_timer1();
  }
}

function stop_timer1(){
  clearInterval(id1);
}
function stop_timer2(){
  clearInterval(id2);
}
function stop_timer3(){
  clearInterval(id3);
}
function stop_timer4(){
  clearInterval(id4);
}

function start_timer1(){
  id1 = setInterval(timer1, 1000);
}
function start_timer2(){
  id2 = setInterval(timer2, 100);
}
function start_timer3(){
  id3 = setInterval(timer3, 10);
}
function start_timer4(){
  id4 = setInterval(timer4, 10);
}

console.log('start');
var date = new Date();
var millisecond = date.getMilliseconds();
setTimeout(start_timer1(), 1000-millisecond);
