const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
function showDate(){
    let out = document.getElementById("current-date")
    let today = new Date()
    out.innerHTML += "<p>Дата и время для русской локали: " + today.toLocaleString("ru-RU") + "</p>";
    out.innerHTML += "<p>Дата и время для американской локали: " + today.toLocaleString("en-US") + "</p>";
    out.innerHTML += "<p>Дата и время для французской локали: " + today.toLocaleString("fr-FR") + "</p>";
    out.innerHTML += "<p>Дата и время для немецкой локали: " + today.toLocaleString("de-DE") + "</p>";
    out.innerHTML += "<p>Дата и время для испанской локали: " + today.toLocaleString("es-ES") + "</p>";
    let year = today.getFullYear();
    let month = today.getMonth() + 1; 
    let date = today.getDate();
    let day = weekdays[today.getDay()];

    
    document.getElementById('year').textContent = 'Текущий год: ' + year;
    document.getElementById('month').textContent = 'Текущий месяц: ' + month;
    document.getElementById('date').textContent = 'Текущая дата: ' + date;
    document.getElementById('day').textContent = 'День недели: ' + day;
}




