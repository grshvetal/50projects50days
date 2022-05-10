const progress = document.getElementById('progress')  //get progress line
const prev = document.getElementById('prev')          //get 'prev' button  
const next = document.getElementById('next')          //get 'next' button  
const circles = document.querySelectorAll('.circle')  //get circles with number  

let currentActive = 1                                 //counter

//notice click on 'next' button and do things 
next.addEventListener('click', () => {
    currentActive++                                     //count up
    if (currentActive > circles.length) {               //if counter is more then number of circles, 
        currentActive = circles.length                  //counter should stay at the (max) (at last circle)    
    }
    update()                                            //update what?
})

//notice click on 'prev' button and do thnings
prev.addEventListener('click', () => {
    currentActive--                                    //count down
    if (currentActive < 1) {                           //if counter is zero,
        currentActive = 1                              //counter should stay at the (min) 1 (at first cricle) 
    }
    update()                                           //update what? 
})

function update() {
    // make circles active or non-active
    circles.forEach((circle, index) => {               //take each circle with its index (in array holder) 
        if (index < currentActive) {                   //if cricle is within counter 
            circle.classList.add('active')             //make it 'active' 
        } else {                                       //otherwise 
            circle.classList.remove('active')          //make it 'non-active' 
        }
    })

    //decrease or increase line according to counter position
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1)/(circles.length - 1)*100 + '%'

    //make buttons disabled or enabled according to counter position
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

