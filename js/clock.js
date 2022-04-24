  const clockContainer = document.querySelector(".clock");

  function displayTime() {

    let time = new Date();

      let hour = time.getHours();
      let min = time.getMinutes();

    let displayTime = `<div class="clock-flex-wrap">
                      <div><p>${hour}</p></div>
                      <div><p>:</p></div>
                      <div><p>${min}</p></div>
                      </div>`  

    clockContainer.innerHTML = displayTime;
  }

  displayTime();