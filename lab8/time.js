function showTime(){
    let today=new Date()
    let currentTime = today.toLocaleString("ru-RU")
    document.getElementById("time").innerHTML = currentTime
    document.getElementById("time1").innerHTML = currentTime
    let seconds = today.getSeconds();
    let milliseconds = today.getMilliseconds();
    let degrees = (seconds * 6) + (milliseconds * 0.006);
    document.getElementById("Vremy").style.transform = `rotate(${degrees}deg)`;
}
setInterval(showTime, 1000)