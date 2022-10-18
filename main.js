const primaryNav = document.querySelector(".primary-nav");
const mobileToggle = document.querySelector(".mobile-toggle");
const mainHeader = document.querySelector(".main-header");

const productContainer = document.querySelectorAll(".product-container");
const btnPrev = document.querySelectorAll(".btn-prev");
const btnNext = document.querySelectorAll(".btn-next");

mobileToggle.addEventListener("click",()=>{
    const show = primaryNav.getAttribute("data-visible");
    if(show === "false"){
        primaryNav.setAttribute("data-visible",true);
        mobileToggle.setAttribute("aria-expanded",true);
        mainHeader.setAttribute("data-overlay",true);
    } else {
        primaryNav.setAttribute("data-visible",false);
        mobileToggle.setAttribute("aria-expanded",false);
        mainHeader.setAttribute("data-overlay",false);
    }
});

productContainer.forEach((item, i)=>{
    let containerBox = item.getBoundingClientRect();
    let containerWidth = containerBox.width;
    
    btnNext[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    });
    
    btnPrev[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    });
});