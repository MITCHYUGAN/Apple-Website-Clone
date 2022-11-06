let Night = document.querySelectorAll('#NightBtn')
let ipadAir = document.getElementById('ipadAir')
let body = document.getElementById('body')
let land = document.getElementById('landpage')
let ipadMini = document.getElementById('ipad-mini')
let iphone13Pro = document.getElementById('iphone13Pro')
let iphone = document.getElementById('iphone')
let airpods = document.getElementById('airpods')
let airtags = document.getElementById('airtags')
let airpodsHeading = document.getElementById('airpods_heading')
let airpodsParagraph = document.getElementById('airpods_paragraph')
let iphone13Heading = document.getElementById('iphone13-heading')
let landHeading = document.getElementById('landHeading')
let superpower = document.getElementById('superpower')
let iphone13ProParagraph = document.getElementById('iphone13Pro-paragraph')
let ipadMiniHeading = document.getElementById('ipad-mini-heading')
let ipadMiniParagraph = document.getElementById('ipad-mini-paragraph')
let airtagsHeading = document.getElementById('airtags_div-one_heading')
let airtagsParagraph = document.getElementById('airtags-paragraph')
let iphone13ProHeading = document.getElementById('iphone13Pro_heading')
let footer = document.getElementById('macfooter')
let footerpara = document.getElementById('fpara')
let finaldiv = document.getElementById('footerfinaldiv')
let findtext = document.getElementById('footerfindtext')
let bool = true

let subMenu = document.getElementById("subMenu");
let submenubacground = document.querySelector('.sub-menu')

 function toggleMenu(){
   subMenu.classList.toggle("openDisplay");
}



Night.forEach(val => {
    val.addEventListener('click', function night(){
        land.classList.toggle('landpageActive')
        body.classList.toggle('bodyActive')
        landHeading.classList.toggle('landHeadingactive')
        ipadAir.classList.toggle('ipadAirActive')
        ipadMini.classList.toggle('ipadMiniActive')
        iphone.classList.toggle('iphoneActive')
        airpods.classList.toggle('airpodsActive')
        airtags.classList.toggle('airtagsActive')
        airpodsHeading.classList.toggle('airpodsHeading')
        airpodsParagraph.classList.toggle('airpodsParagraph')
        superpower.classList.toggle('superpowerActive') 
        iphone13Heading.classList.toggle('iphone13HeadingActive')
        iphone13Pro.classList.toggle('iphone13ProActive')
        iphone13ProHeading.classList.toggle('iphone13ProHeadingactive')
        ipadMiniHeading.classList.toggle('ipadMiniHeadingactive')
        ipadMiniParagraph.classList.toggle('ipadMiniParagraphactive')
        airtagsHeading.classList.toggle('airtagsHeadingactive')
        airtagsParagraph.classList.toggle('airtagsParagraphactive')
        iphone13ProParagraph.classList.toggle('iphone13ProParagraphactive')
        footer.classList.toggle('macfooteractive')
        footerpara.classList.toggle('fparaActive')
        finaldiv.classList.toggle('footerfinaldivActive')
        findtext.classList.toggle('footerfindtextActive')
        submenubacground.classList.toggle('subMenuActive')
        if(bool){
            Night.forEach(val =>{
               val.removeAttribute('class');
            })
            Night.forEach(val =>{
                val.setAttribute('class', "bx bxs-sun bx-tada sun")
            })
            bool = false;
        }else if (!bool){

            Night.forEach(val =>{
                val.removeAttribute('class');
            })
            Night.forEach(val =>{
                val.setAttribute('class', "bx bxs-moon bx-tada")
            }) 
            bool = true;
        }
    })
})



let footerheading = document.getElementsByClassName('headingandicon')
let f;
for(f = 0; f < footerheading.length; f++){
    
    footerheading[f].addEventListener('click', function(){
        this.classList.toggle('active')
        var footerlink = this.nextElementSibling;
        if (footerlink.style.display === "block") {
            footerlink.style.display = "none";
            footerlink.style.transitionDuration ="1s";
          } else {
            footerlink.style.display = "block";
        }
    }); 
}

const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})