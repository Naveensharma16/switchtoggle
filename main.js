const toggleBtn = document.querySelector(".toggle");

const sound = new Audio('./assets/sound.mp3');

// following anomymous iife function is used to set the light mode based on system time if it is night it will set to noon and if its data time its set to day
(() =>{
  
    const time = new Date();
    if((time.getHours() >= 0 && time.getHours() <= 6) || (time.getHours() >= 19 && time.getHours() <= 24)){
        toggleBtn.className = "toggle moon";
        const icon = `<img src="./assets/moon.png" />`;
        document.querySelector(".icon").innerHTML= icon;
    }
    else{
        toggleBtn.className = "toggle sun";
        const icon = `<img src="./assets/sun.png" />`;
        document.querySelector(".icon").innerHTML= icon;
    }
})()



// click event listner on toggle button click
toggleBtn.addEventListener('click',() =>{
    // play the switch sound
    sound.play();
    // toggle between classes
    if(toggleBtn.classList.contains("sun")){
        toggleBtn.className = "toggle moon";
        const icon = `<img src="./assets/moon.png" />`;
        document.querySelector(".icon").innerHTML= icon;
    }
    else{
        toggleBtn.className = "toggle sun";
        const icon = `<img src="./assets/sun.png" />`;
        document.querySelector(".icon").innerHTML= icon;
    }

})




// note read about classList ad className

