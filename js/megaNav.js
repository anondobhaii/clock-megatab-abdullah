const nav = document.querySelectorAll("ul")[0];
const navbody = document.querySelectorAll(".nav")[0];
const blr = document.querySelectorAll(".blur")[0];
const megamenu = document.querySelectorAll(".mega")[0];
const clockDisplay = document.querySelectorAll(".clock")[0];



nav.addEventListener("click", (e) => {
  const menus = Array.from(e.target.parentElement.parentElement.children);
  const clickedIndex = menus.indexOf(e.target.parentElement);

  console.log(menus[1].children[0]);

  for (let i = 0; i < menus.length; i++) {
     if(i === clickedIndex && i == 2){
      if(!menus[i].classList.contains("active")){
        menus[i].classList.add("active");
        megamenu.classList.remove("d-none");
        megamenu.style.top= "80px";
        clockDisplay.style.filter = "blur(4px)";       
        clockDisplay.style.background = "grey";
      }
      else{   
      menus[i].classList.remove("active");
      megamenu.style.top= "-280px";
      clockDisplay.style.filter = "blur(0)";       
      clockDisplay.style.background = "transparent";
      }
    }
    else{
      menus[i].classList.remove("active");
      megamenu.classList.top= "-280px";
    }
  }
});
blr.addEventListener("click", (e)=>{
  const menus = Array.from(e.target.parentElement.parentElement.children);
  for (let i = 0; i < 5; i++) {
    menus[i].classList.remove("active");
    megamenu.style.top= "-280px";
    clockDisplay.style.filter = "blur(0)";       
    clockDisplay.style.background = "transparent";  
  }
})







































