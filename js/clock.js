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