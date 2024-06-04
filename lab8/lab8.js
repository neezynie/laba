function showDate(){
    let out = document.getElementById("current-date")
    let today = new Date()
    out.innerHTML += "<p>Дата и время для русской локали: " + today.toLocaleString("ru-RU") + "</p>";
    out.innerHTML += "<p>Дата и время для американской локали: " + today.toLocaleString("en-US") + "</p>";
    out.innerHTML += "<p>Дата и время для французской локали: " + today.toLocaleString("fr-FR") + "</p>";
    out.innerHTML += "<p>Дата и время для немецкой локали: " + today.toLocaleString("de-DE") + "</p>";
    out.innerHTML += "<p>Дата и время для испанской локали: " + today.toLocaleString("es-ES") + "</p>";
}




