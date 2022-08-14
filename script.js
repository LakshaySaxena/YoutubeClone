let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});

function Mic() {
  // alert("Hello! Your mic is not working,Kindly type to search");
   alert("Alexa naraaz hai, type krke bata kya chahie");
}

function subscribe(x) {
  // document.getElementById("but1").innerHTML="Subscribed";
  var btn = document.getElementById("but1");
                if (btn.value == "Subscribe") {
                    btn.value = "Subscribed";
                    btn.innerHTML = "Subscribed";
                }
                else {
                    btn.value = "Subscribe";
                    btn.innerHTML = "Subscribe";
                   
                }

    
}
