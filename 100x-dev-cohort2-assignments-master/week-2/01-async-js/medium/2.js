function getCurrentTime() {
    const now = new Date();
  
 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  

    const time24 = `${hours}:${minutes}:${seconds}`;

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const time12 = `${hours}:${minutes}:${seconds} ${ampm}`;
  
    return { time24, time12 };
  }
  
  setInterval(() => {
    const { time24, time12 } = getCurrentTime();
    console.log('24-hour format:', time24);
    console.log('12-hour format:', time12);
  }, 1000);
  