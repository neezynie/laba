function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('daysCount').innerHTML = 'Количество дней с даты ' + inputDate.value + ': ' + daysCount;
}

function closeDaysCount() {
    document.getElementById('daysCount').innerHTML = ''
    document.querySelector('input[type=date]').value = ''
}