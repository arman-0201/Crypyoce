let oval = document.createElement("div")
    oval.setAttribute("class","oval")

document.addEventListener("mousemove", function(event){
    let x = event.clientX
    let y = event.clientY
    oval.style.transition = "0.1s"
    oval.style.left = x + "px"
    oval.style.top = y + "px"
})

let code = 0

document.addEventListener("mousedown", function(event){
    oval.style.transform = "scale(0.5) translateX(25px)"
    oval.style.transition = "0.2s"
})
document.addEventListener("mouseup", function(event){
    oval.style.transform = "scale(1)"
    oval.style.transition = "0.2s"
})

document.body.appendChild(oval)


function openPhoneMenu(){
    if(code == 0){
    $(".menuBarPhone").css({
        left:0,
        transition:"3s"
    })
    code = 1
}
   else if(code == 1){
        $(".menuBarPhone").css({
            left:"-55%",
            transition:"3s"
        })
        code = 0
    }
}

let days = document.getElementById("day")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let secconds = document.getElementById("secconds")

let dayNum = 365;
let hourNum = 24;
let minNum = 60;
let secNum = 10;
// days.innerHTML = dayNum
setInterval(function(){
    days.innerHTML = dayNum
    hours.innerHTML = hourNum
    minutes.innerHTML = minNum
    secconds.innerHTML = secNum

    secNum --
    if(secNum == 0){
        minNum-=1
        secNum = 60
    }
    if(minNum == 0){
        hourNum-=1
        minNum = 60
    }
    if(hourNum == 0){
        dayNum-=1
        hourNum = 24
    }
    return
},1000)

