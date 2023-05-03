console.log("Hello world");
const myName="Rahul TS";
console.log(myName);
const h1=document.querySelector(".heading-primary");
console.log(h1);
//  h1.addEventListener('click',function(){
//      h1.textContent=myName;
//  h1.style.backgroundColor="red";
//  h1.style.padding="5rem";
//  });
const yearEl=document.querySelector(".year");
const currentyear=new Date().getFullYear();
console.log(currentyear);
yearEl.textContent=currentyear;

const btnNavEl=document.querySelector(".btn-mobile-nav");
const headerEl=document.querySelector(".header");
btnNavEl.addEventListener('click',function(){
    headerEl.classList.toggle("nav-open");
});
// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function(link){
//     link.addEventListener('click',function(e){
//         e.preventDefault();
//         const href=link.getAttribute("href");
//         console.log(href);

//         if(href==="#") 
//         window.scrollTo({
//             top:80,
//             behaviour:"smooth",
//         });
//     });
// });
const sectionHeroEl=document.querySelector(".section-hero");
const obs=new IntersectionObserver(function(entries) {
    const ent=entries[0];
    console.log(ent);
    if(ent.isIntersecting ===false){
        document.body.classList.add("sticky");
    }
    if(ent.isIntersecting ===true){
        document.body.classList.remove("sticky");
    }
},
{ 
    root:null,
    threshold:0,
    rootMargin:"-80px",
});
obs.observe(sectionHeroEl); 