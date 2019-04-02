//checking the day: number 0-6 : 0=sunday

var d = new Date();

document.getElementById("day").innerHTML = d.getDay();


//checking the time

document.getElementById("time").innerHTML = d.getHours()+":"+d.getMinutes();


//Compare it to the business hours
//Declare if the business is open
