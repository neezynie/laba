function showTime(){
    let today=new Date()
    let currentTime = today.toLocaleString("ru-RU")
    document.getElementById("time").innerHTML = currentTime
    document.getElementById("time1").innerHTML = currentTime
}
setInterval(showTime, 1000)