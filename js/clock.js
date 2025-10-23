const clockDiv = document.querySelector("#clockDiv");

function updateClock()
{
   const timeNow = new Date;
   let hours = timeNow.getHours();
   let minutes = timeNow.getMinutes();
   let seconds = timeNow.getSeconds();

   if(hours < 10) hours = "0" + hours;
   if(minutes < 10) minutes = "0" + minutes;
   if(seconds < 10) seconds = "0" + seconds;

   const timeString = `${hours}:${minutes}:${seconds}`;
   clockDiv.textContent = timeString;
}

export { updateClock }