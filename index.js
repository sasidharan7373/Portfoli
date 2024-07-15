
// window.alert("Hi iam sasi");




// heder text editor
var typed = new Typed((".text"),{
    strings : ["Frontend Developer" , "Web Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

// side nav in mobile view
var sidenav = document.querySelector(".navbar")

function showNavbar(){
    sidenav.style.left= "0";
}
function closeNavbar(){
    sidenav.style.left= "-350px";
}

window.onscroll = ()=>{

}



// click top button

const button = document.querySelector('.btn');
const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();


// parallax///////////////
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));