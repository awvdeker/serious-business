//checking the day: number 0-6 : 0=sunday

var d = new Date();
var dDay = d.getDay();
var dHours = d.getHours();
var dMinutes = d.getMinutes();


document.getElementById("day").innerHTML = dDay;

//checking the time

document.getElementById("time").innerHTML = dHours+":"+dMinutes;


//Compare it to the business hours
//Declare if the business is open



var x = document.getElementsByClassName(dDay);
var later = false;
var earlier = false;

if (dHours<x[0].innerHTML){ later = false;}
else if (dHours>x[0].innerHTML){ later = true;}
else if ((dHours==x[0].innerHTML) && (dMinutes>=x[1].innerHTML)){later = true;}
else {later = false;}


if (dHours>x[2].innerHTML){ earlier = false;}
else if (dHours<x[2].innerHTML){ earlier = true;}
else if ((dHours==x[2].innerHTML) && (dMinutes<x[3].innerHTML)){earlier = true;}
else {earlier = false;}


if ((later==true) && (earlier==true)){
  document.getElementById("openOrClosed").innerHTML="open";
} else {
  document.getElementById("openOrClosed").innerHTML="closed";
}
