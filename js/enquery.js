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






const cookieContainer = document.querySelector(".cookie-container");
const cookieBtn = document.querySelector(".cookie-btn");

cookieBtn.addEventListener('click', () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000)





let sectionInView = false;

window.addEventListener('scroll', function() {
  const section = document.getElementById('section');
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Check if section is in the viewport
  if (sectionTop < windowHeight / 1.2 && sectionTop > -section.clientHeight) {
    if (!sectionInView) {
      sectionInView = true;
      startCounters();
    }
  } else {
    sectionInView = false;
  }
});

function startCounters() {
  const counters = document.querySelectorAll('.counter');
  console.log(counters)
  const targets = [7, 12, 150, 15]; // Example values, replace with your own

  counters.forEach((counter, index) => {
    let count = 0;
    const target = targets[index];
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        counter.textContent = count;
      } else {
        clearInterval(interval);
      }
    }, 10); // Speed of increment, lower value for faster increment
  });
}


// let dropdown = document.getElementById('navbarLightDropdownMenuLink');
// let dropdownMenu = document.getElementsByClassName('dropdown-menu')
// dropdown.addEventListener('click',()=>{
//   dropdownMenu.
// })