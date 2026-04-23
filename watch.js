let hour=document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second=document.querySelector('#second');
let toggleBtn = document.querySelector('#toggleformat');
let is24Hour=true;
const updatetime=()=>{
    const now=new Date();
    // DIGITAL WATCH

    let h=now.getHours();
    let m=String(now.getMinutes()).padStart(2,'0');
    let s= String(now.getSeconds()).padStart(2,'0');
    let session ="";

     if (!is24Hour) {
        session = h >= 12 ? " PM" : " AM";
        h = h % 12 || 12; 
    }
let display=String(h).padStart(2,'0');
document.getElementById('digital').innerHTML=`${display}:${m}:${s}${session}`;
// ANALOG WATCH
const hourdeg=(now.getHours()%12)*30+now.getMinutes()*0.5;
const mintdeg=now.getMinutes()*6;
const seconddeg=now.getSeconds()*6;
hour.style.transform=`translate(-50%)rotate(${hourdeg}deg)`;
minute.style.transform=`translate(-50%)rotate(${mintdeg}deg)`;
second.style.transform=`translate(-50%)rotate(${seconddeg}deg)`;
// toggle button 
toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggleBtn.innerText = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updatetime();
});
}

setInterval(updatetime,1000);
updatetime();