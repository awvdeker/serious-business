setInterval(liveClock,100);

function liveClock () {

//checking the day: number 0-6 : 0=sunday

  var d = new Date();
  var dDay = d.getDay();
  var dHours = d.getHours();
  var dMinutes = d.getMinutes();
  var dSeconds = d.getSeconds();

  switch (dDay) {
    case 0:
      var dDayString = "Sunday";
      break;
    case 1:
      var dDayString = "Monday";
      break;
    case 2:
      var dDayString = "Tuesday";
      break;
    case 3:
      var dDayString = "Wednesday";
      break;
    case 4:
      var dDayString = "Thursday";
      break;
    case 5:
      var dDayString = "Friday";
      break;
    case 6:
      var dDayString = "Saturday";
  }

  document.getElementById("day").innerHTML = dDayString;

//checking the time

  document.getElementById("time").innerHTML = dHours+":"+dMinutes+":"+dSeconds;


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


}

//Add a live updating clock
//of the current time (digital)


//When you click this button, the current day's
//business hours end at the current time
//in the table

var el=document.getElementById("button");

el.addEventListener("click",changeClosingHour);

function changeClosingHour() {

  var dChange = new Date();
  var dDayChange = dChange.getDay();
  var dHoursChange = dChange.getHours();
  var dMinutesChange = dChange.getMinutes();

  var xChange = document.getElementsByClassName(dDayChange);

  xChange[2].innerHTML=dHoursChange;
  xChange[3].innerHTML=dMinutesChange;

}
