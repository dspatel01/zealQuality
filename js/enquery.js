// let enqueryForm = document.getElementById("enqueryForm");

// enqueryForm.addEventListener("click", function () {
//     const element = document.querySelector(".enqueryFormBox");
//     element.style.display = "block";
//     console.log(" open main box")
// });

// let closeButton = document.getElementById("closeButton");

// closeButton.addEventListener("click", function () {
//     const element = document.querySelector(".enqueryFormBox");
//     element.style.display = "none";
//     console.log(" close main box")
// });

// let eamilButton = document.getElementById("eamilButton");

// eamilButton.addEventListener("click", function () {
//     const element1 = document.querySelector(".getInTouchBox");
//     element1.style.display = "flex";
//     element1.style.zIndex = "10001";

//     element1.style.position = "fixed";
//     element1.style.top = "70px";

//  alert(" button clicked")
//     const element = document.querySelector(".enqueryFormBox");
//     element.style.display = "none";

//     console.log(" open contact page main box")

// });

// form close button

// let closeButtonForm = document.getElementById("closeButtonForm");

// closeButtonForm.addEventListener("click", function () {
//     const element = document.querySelector(".emailFormContainer");

//     element.style.display = "none"
//     console.log(" close contact page main box")
//     location.reload();
// });


// year of working section

let valueDisplays = document.querySelectorAll(".numCounter");
let interval = 1000;

valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
    // console.log(endValue)
})


const cookieContainer = document.querySelector(".cookie-container");
const cookieBtn = document.querySelector(".cookie-btn");

cookieBtn.addEventListener('click', ()=>{
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed","true")
});

setTimeout(()=>{
    if(!localStorage.getItem("cookieBannerDisplayed")){
        cookieContainer.classList.add("active");
    }  
},2000)
