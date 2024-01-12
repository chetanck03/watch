setInterval(()=>{
// id
    let hh= document.getElementById('hh')
    let mm= document.getElementById('mm')
    let ss= document.getElementById('ss')
// dots
    let sec_dot = document.querySelector('.sec_dot')
    let min_dot = document.querySelector('.min_dot')
    let hr_dot = document.querySelector('.hr_dot')

// Niddles
    let hr= document.getElementById('hr');
    let mn= document.getElementById('mn');
    let sc= document.getElementById('sc');

    // time
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let h = new Date().getHours();


    // 12 hrs clock
    hh.style.strokeDashoffset = 490 - (490 * h) / 24;
    // 60 minutes
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;
    // 60 seconds
    ss.style.strokeDashoffset = 760 - (760 * s) / 60;

// Rotation of ball
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360 / 60 seconds = 6
    min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360 / 60 minutes = 6
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`; // 360 / 12hrs = 30

// Rotation of Niddles
   hr.style.transform = `rotateZ(${h * 30}deg)`; 
   mn.style.transform = `rotateZ(${m * 6}deg)`; 
   sc.style.transform = `rotateZ(${s * 6}deg)`; 
   

})



