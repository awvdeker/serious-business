//checking the day

var d = new Date();

document.getElementById("day").innerHTML = d.getDay();


//checking the time

document.getElementById("time").innerHTML = d.getHours()+":"+d.getMinutes();
