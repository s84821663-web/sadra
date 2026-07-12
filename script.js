/*==========================
        Loading
==========================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/*==========================
      Smooth Scroll
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==========================
      Sticky Header
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(8,16,31,.95)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

    }

    else{

        header.style.background="rgba(255,255,255,.08)";
        header.style.boxShadow="none";

    }

});

/*==========================
      Fade Animation
==========================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(item=>{

observer.observe(item);

});

/*==========================
      Button Hover
==========================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
/*==========================
        Dark Mode
==========================*/

const darkBtn = document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

localStorage.setItem(
"theme",
document.body.classList.contains("light-mode")
? "light"
: "dark"
);

});

}

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light-mode");

}

/*==========================
        Back To Top
==========================*/

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================
      Gallery Hover
==========================*/

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

/*==========================
      Counter Animation
==========================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const value=+counter.innerText;

const speed=100;

const inc=Math.ceil(target/speed);

if(value<target){

counter.innerText=value+inc;

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

/*==========================
      Card Animation
==========================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.transform=
`rotateY(${(x-150)/20}deg)
 rotateX(${-(y-150)/20}deg)
 scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0) rotateX(0)";

});

});
/*==================================
        Typing Effect
==================================*/

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

const text = heroTitle.innerText;

heroTitle.innerText = "";

let i = 0;

function typing(){

if(i < text.length){

heroTitle.innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}

/*==================================
        Parallax Hero
==================================*/

window.addEventListener("scroll",()=>{

const hero = document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY =
window.pageYOffset * 0.5 + "px";

}

});

/*==================================
        Auto Slider Reviews
==================================*/

const reviews = document.querySelector(".reviews");

if(reviews){

let position = 0;

setInterval(()=>{

position++;

if(position >= reviews.children.length){

position = 0;

}

reviews.style.transform =
`translateX(${position * -100}%)`;

reviews.style.transition = ".7s";

},4000);

}

/*==================================
        Navbar Active Link
==================================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop-120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==================================
        Random Card Delay
==================================*/

document.querySelectorAll(".card").forEach((card,index)=>{

card.style.animationDelay =
`${index * 0.2}s`;

});

/*==================================
        Image Hover Rotate
==================================*/

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform =
"scale(1.08) rotate(2deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform =
"scale(1) rotate(0deg)";

});

});

/*==================================
        Console Message
==================================*/

console.log(
"Urban Taste | Designed by You ❤️"
);