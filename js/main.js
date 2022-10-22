const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq =>{
    faq.addEventListener('click', function(){
            faq.classList.toggle('show')
            faq.classList.toggle('imgrotate')
    })
})



const navlink = document.querySelector('.navlinks')
const navlinka = document.querySelectorAll('.navlinks a')
const navOpen = document.querySelector('.open')
const navClose = document.querySelector('.close')


function navopen(){
    navlink.style.top ="0%";
    navOpen.style.display = "none"
    navClose.style.display = "block"
}

function navclose(){
    navlink.style.top ="-120%";
    navOpen.style.display = "block"
    navClose.style.display = "none"
}

navlinka .forEach(navLink => {
    navLink.addEventListener('click', function(){
        navclose()
    })
  });


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

 // typed effect
 let typed = new Typed('.typing-effect', {
    strings: [
    "WEB DEVELOPER",
    "GRAPHIC DESIGNER",
    "WEB DESIGNER",
    "MANAGER"
    ],
    backSpeed: '9',
    typeSpeed: '9',
    loop: true
    });



const tabHeaders = document.querySelectorAll('.feature-2 p');
const tabParent = document.querySelectorAll('.tabParent')
console.log(tabHeaders)

tabHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
        tabParent.forEach(parentTab => {
            parentTab.classList.remove('active')
        });
        tabHeaders.forEach(headerTab => {
            headerTab.classList.remove('active')
        });
        tabParent[index].classList.add('active')
        tabHeaders[index].classList.add('active')
    })
})
