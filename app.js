window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');     //Get sounds in a collection
    const pads = document.querySelectorAll('.pads div');    //Get all the 6 pads
    const visual = document.querySelector('.visual');       //Get the visual div
    const colors = [                                        //Get the colors for bubbles
        "#88CCF1",
        "#688E26",
        "#8A4FFF",
        "#D81E5B",
        "#DE541E",
        "#57B8FF"
    ];


    pads.forEach((pad, index) => {                          //Function for playing sound
        pad.addEventListener('click', function () {         //On click
            sounds[index].currentTime = 0;                  //Reset the sound time to zero for multiple clicks
            sounds[index].play();                           //Play the sound
            createBubbles(index);
        });
    });

    //Function for bubbles
    const createBubbles = (index) =>{
        const bubble = document.createElement('div');       //Create a new div
        visual.appendChild(bubble);                         //Attach the bubble to visual div
        bubble.style.backgroundColor = colors[index];       //Choose color for bubbles
        bubble.style.animation = "jump 1s ease"             //Animation
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});