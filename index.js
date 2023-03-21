function girl() {
  let url = "https://v2.api-m.com/api/meinv"
  let xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let obj = JSON.parse(xhr.responseText)
        let video = document.getElementById("myvideo")
        video.volume = 0.3
        video.src = obj.data
      } else {
        console.log("error")
      }
    }
  }
  xhr.send()
}
girl()
document.onkeydown = function (e) {    //对整个页面监听  
  var keyNum = window.event ? e.keyCode : e.which;       //获取被按下的键值  
  if (keyNum == 32) {
    girl();
    leftHeisi();
    rightBaisi();
    tianGuo();
  }
  var vol = 0.1;  //1代表100%音量，每次增减0.1
  var time = 1; //单位秒，每次增减10秒
  let video = document.getElementById("myvideo")
  var e = event || window.event || arguments.callee.caller.arguments[0];

  if (e && e.keyCode === 38) {
    // 按 向上键，增加音量
    video.volume !== 1 ? video.volume += vol : 1;
    return false;

  } else if (e && e.keyCode === 40) {
    // 按 向下键，减少音量
    video.volume !== 0 ? video.volume -= vol : 1;
    return false;

  } else if (e && e.keyCode === 37) {
    // 按 向左键，播放时间增加
    video.currentTime !== 0 ? video.currentTime -= time : 1;
    return false;

  } else if (e && e.keyCode === 39) {
    // 按 向右键，播放时间减少
    video.volume !== video.duration ? video.currentTime += time : 1;
    return false;

    // } else if (e && e.keyCode === 32) {
    //   // 按空格键 判断当前是否暂停
    //   video.paused === true ? video.play() : video.pause();
    //   return false;

  } else if (e && e.keyCode === 33) {
    // 按PageUp键，播放速度增加
    video.playbackRate += vol;
    return false;

  } else if (e && e.keyCode === 34) {
    // 按PageDown键，播放速度减少
    video.playbackRate -= vol;
    return false;
  }
}

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
}
var leftHeisi =()=>{
  fetch("https://v2.api-m.com/api/heisi", requestOptions)
  .then(response => response.text())
  .then(result => {
    let leftImg = document.getElementById("leftImg");
    let heisi = JSON.parse(result);
    leftImg.src = heisi.data;
  })
  .catch(error => console.log('error', error))
}
leftHeisi()

var rightBaisi =()=>{
  fetch("https://v2.api-m.com/api/baisi", requestOptions)
  .then(response => response.text())
  .then(result => {
    let rightImg = document.getElementById("rightImg");
    let baisi = JSON.parse(result);
    rightImg.src = baisi.data;
  })
  .catch(error => console.log('error', error))
}
rightBaisi()

var tianGuo =()=>{
  fetch("https://v2.api-m.com/api/dog", requestOptions)
  .then(response => response.text())
  .then(result => {
    let tianGuoH2 = document.getElementById("Tiangou");
    let tianGuo = JSON.parse(result);
    tianGuoH2.innerHTML = tianGuo.data;
  })
  .catch(error => console.log('error', error))
}
tianGuo()

var btnFuntion =()=>{
  girl();
  leftHeisi();
  rightBaisi();
  tianGuo();
}