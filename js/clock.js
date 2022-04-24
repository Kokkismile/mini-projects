  const clockContainer = document.querySelector(".clock");

  function displayTime() {

    let time = new Date();

      let hour = time.getHours();
      hour = (hour < 10) ? "0" + hour : hour;
      let min = time.getMinutes();
      min = (min < 10) ? "0" + min : min;
      let sec = time.getSeconds();
      sec = (sec < 10) ? "0" + sec : sec;

    let displayTimeHtml = `<div class="clock-flex-wrap">
                      <div><p>${hour}</p></div>
                      <div><p class="colon">:</p></div>
                      <div><p>${min}</p></div>
                      <div><p class="colon">:</p></div>
                      <div><p>${sec}</p></div>
                      </div>`  

    clockContainer.innerHTML = displayTimeHtml;

    let t = setTimeout(function(){ displayTime() }, 1000);
}
  displayTime();
  
//_____________________________________________ https://flexiple.com/javascript-clock

/*   function currentTime() {

    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime(); */