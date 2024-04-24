setInterval(() => {
    d=new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hRotation = 30*h + m/2;
    mRotation = 6*m;
    sRotation = 6*s;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}, 1000);


//  12 hr -> 360
//  1 hr -> 360/12 = 30

//  1) for h hour = 30h + m/2

//  60 m -> 1 hr -> 30
//  1 m -> 1/2

//  60 min -> 360
//  1 min -> 6
 
//  2) m min -> 6 m

// 60 s -> 360
// 1 s -> 6

// 3) s -> 6s