const date = new Date('July 3, 2021 10:00:00');

function converter(){
    var today = new Date(),
        timeLeft = date-today;
    var days = Math.floor(timeLeft/86400000);
        timeLeft -= days*86400000;
        document.querySelector('.days').value = days;
    var hours = Math.floor(timeLeft/3600000);
        timeLeft -= hours*3600000;
        document.querySelector('.hours').value = hours;
    var minutes = Math.floor(timeLeft/60000);
        timeLeft -= minutes*60000;
        document.querySelector('.minutes').value = minutes;
    var seconds = Math.floor(timeLeft/1000);
        timeLeft -= seconds*1000;
        document.querySelector('.seconds').value = seconds;
}

converter()

setInterval(() => converter(),1000)