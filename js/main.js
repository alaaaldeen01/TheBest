// Event On First Paragraph
let p1 = document.querySelector(".show1");
let divTab1 = document.querySelector(".tab-1");
let p2 = document.querySelector(".show2");
let divTab2 = document.querySelector(".tab-2");
let p3 = document.querySelector(".show3");
let divTab3 = document.querySelector(".tab-3");
let p1After = document.querySelector(".after1");
let p2After = document.querySelector(".after2");
let p3After = document.querySelector(".after3");
let p1Before = document.querySelector(".before1");
let p2Before = document.querySelector(".before2");
let p3Before = document.querySelector(".before3");

p1.onclick = () => {
  divTab1.style.cssText = "opacity:1";
  divTab2.style.cssText = "opacity:0";
  divTab3.style.cssText = "opacity:0";
  p1After.style.cssText = "opacity:1";
  p2After.style.cssText = "opacity:0";
  p3After.style.cssText = "opacity:0";
  p1Before.style.cssText = "background-color:#f5a425;";
  p2Before.style.cssText = "background-color:white;";
  p3Before.style.cssText = "background-color:white;";
  p1.style.cssText = "color: #f5a425;";
  p2.style.cssText = "color: white;";
  p3.style.cssText = "color: white;";
};
// End First Event

// Event On Second Paragraph
p2.onclick = () => {
  divTab1.style.cssText = "opacity:0";
  divTab2.style.cssText = "opacity:1";
  divTab3.style.cssText = "opacity:0";
  p1After.style.cssText = "opacity:0";
  p2After.style.cssText = "opacity:1";
  p3After.style.cssText = "opacity:0";
  p1Before.style.cssText = "background-color:white;";
  p2Before.style.cssText = "background-color:#f5a425;";
  p3Before.style.cssText = "background-color:white;";
  p1.style.cssText = "color:white;";
  p2.style.cssText = "color:#f5a425;";
  p3.style.cssText = "color: white;";
};
// End Second Event

// Event On Third Paragraph
p3.onclick = () => {
  divTab1.style.cssText = "opacity:0";
  divTab2.style.cssText = "opacity:0";
  divTab3.style.cssText = "opacity:1";
  p1After.style.cssText = "opacity:0";
  p2After.style.cssText = "opacity:0";
  p3After.style.cssText = "opacity:1";
  p1Before.style.cssText = "background-color:white;";
  p2Before.style.cssText = "background-color:white;";
  p3Before.style.cssText = "background-color:#f5a425;";
  p1.style.cssText = "color: white;";
  p2.style.cssText = "color: white;";
  p3.style.cssText = "color: #f5a425";
};
// End Third Event

