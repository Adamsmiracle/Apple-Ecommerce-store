// common js styles
document.querySelectorAll(".watch-control, .control a, .iphone-btn").forEach(control => {
    control.addEventListener("click", (e) => {
        e.preventDefault()
    })
})
// End of common js styles



// cube
let y = 0
let x = 0
let z = 0
let bool = true
let interval;

const cube = document.querySelector(".cube")

const btns = document.querySelectorAll(".controls a")

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains('top-x-control')) {
        cube.style.transform = `rotateX(${x += 20}deg)rotateY(${y}deg)rotateZ(${z}deg)`
        } if (e.target.classList.contains('bottom-x-control')) {
            cube.style.transform = `rotateX(${x += -20}deg)rotateY(${y}deg)rotateZ(${z}deg)`
        }if (e.target.classList.contains('left-y-control')) {
            cube.style.transform = `rotateX(${x}deg)rotateY(${y += -20}deg)rotateZ(${z}deg)`
        } if (e.target.classList.contains('right-y-control')) {
            cube.style.transform = `rotateX(${x}deg)rotateY(${y += 20}deg)rotateZ(${z}deg)`
        }if (e.target.classList.contains('top-z-control')) {
            cube.style.transform = `rotateX(${x}deg)rotateY(${y}deg)rotateZ(${z -= 20}deg)`
        }if (e.target.classList.contains('bottom-z-control')) {
            cube.style.transform = `rotateX(${x}deg)rotateY(${y}deg)rotateZ(${z += 20}deg)`
        }
        
        
})
})


const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
        cube.style.transform = `rotateX(${x}deg)rotateY(${y++}deg)rotate(${z}deg)`
    },50)
    } else {
        clearInterval(interval)
    }

}

playPause()

document.querySelector(".controls").addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector(".controls").addEventListener('mouseout', () => {
    bool = true
    playPause()
})

// end of cube


// slideshow
const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++){
        const div = document.createElement("div")

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`
        1 === i && div.classList.add("change")
        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll(".slideshow div")

let a = 1

const slideshow = () => { 
    
    setInterval(() => {
        a++

        const div = document.querySelector(".slideshow .change")
        div.classList.remove("change")

        if (a < divs.length) { div.nextElementSibling.classList.add("change") } else {
            divs[0].classList.add('change')
            a = 1
        }
       
            
        
 }, 2000)
}

slideshow()
// end of slidshow

// section 3
const section3Content = document.querySelector(".section-3-content")

window.addEventListener("scroll", () => {
    if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add("change")
    }
})
// End of section 3

// section 4
const watchBands = document.querySelector(".watch-bands")
const watchCases = document.querySelector(".watch-cases")
const watchTopControl = document.querySelector(".watch-top-control")
const watchRightControl = document.querySelector(".watch-right-control")
const watchBottomControl = document.querySelector(".watch-bottom-control")
const watchLeftControl = document.querySelector(".watch-left-control")

let axisY = 0
let axisX = 0

const hideControls = () => {
    if (axisY === -280) {
watchTopControl.classList.add("hidecontrol")
    }
    else {
        watchTopControl.classList.remove("hidecontrol")
    }

    if (axisY === 280) {
watchBottomControl.classList.add("hidecontrol")
    }
    else {
        watchBottomControl.classList.remove("hidecontrol")
    }

      if (axisX === 280) {
watchRightControl.classList.add("hidecontrol")
    }
    else {
        watchRightControl.classList.remove("hidecontrol")
      }
    
      if (axisX === -280) {
watchLeftControl.classList.add("hidecontrol")
    }
    else {
        watchLeftControl.classList.remove("hidecontrol")
    }
}

watchTopControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControls()
})
watchBottomControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControls()
})

watchRightControl.addEventListener("click", () => {
    watchBands.style.marginRight = `${axisX += 70}rem`
    hideControls()
})
watchLeftControl.addEventListener("click", () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`
    hideControls()
})
// End of section 4
