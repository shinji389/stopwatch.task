'use strict'

const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

// console.log(start);

let count = 0;
let intervalId = null;


function updateTime(){
  const msec = count % 10;
  const sec = Math.floor(count / 1000) % 60;
  const min = Math.floor(count / (1000*60)) % 60;
  const hour = Math.floor(count / (1000*60*60));
  
  timeElement.innerHTML = `${hour}:${min}:${sec}:${msec}`;
}

//スタートボタン
start.addEventListener('click', function(e){
  if(intervalId !==null){ return; }
  let pre = new Date();
  intervalId = setInterval(function(){
    const now = new Date(); 
    count += now - pre;
    pre = now;
    updateTime();
    console.log(count);
  }, 1);
  
  $("#start").attr("disabled", true);
});

//ストップボタン
stop.addEventListener('click' ,function(e){
  clearInterval(intervalId);
  intervalId = null;
  
  $("#start").attr("disabled", false);
});

//リセットボタン
reset.addEventListener('click', function(e){
  count = 0;
  updateTime();
});




// var count = 0;
// var countup = function(){
//   console.log(count++);
//   var id = setTimeout(countup, 1000);
//   if(count > 5){
//     clearTimeout(id);
//   }
// };
// countup();


// setInterval(countup, 1000);


// var id = setInterval(function(){
//   countup();
//   if(count > 10){
//     clearInterval(id);
//   }}, 1000);

  
// setTimeout(countup, 1000);

