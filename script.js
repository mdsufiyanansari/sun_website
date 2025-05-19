const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelectorAll("#elem");
// var image = a.getAttribute("data-image");
// console.log(image)

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
   fixed.style.display = "block"
})

elemC.addEventListener("mouseleave", function(){
   fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
         fixed.style.backgroundImage = `url(${image})`
    })
})
// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url (${image})`
// })    

       const headings = document.querySelectorAll('.text');
    const imageContainer = document.getElementById('imageContainer');

    headings.forEach((heading) => {
      heading.addEventListener('click', () => {
        // Reset all headings
        headings.forEach(h => h.classList.remove('active'));

        // Set active on clicked
        heading.classList.add('active');
        

        // Show image
        const imgURL = heading.getAttribute('data-image2');
        imageContainer.innerHTML = `<img src="${imgURL}" alt="Selected Image">`;
      });
    });


    //   var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: "auto",
    //   centeredSlides: true,
    //   spaceBetween: 30,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

   function menuAnimation(){
     var menu = document.querySelector("nav h3")
    var full =  document.querySelector("#full-scr")
    var flag = 0
    var navimg = document.querySelector("nav-img")
    menu.addEventListener("click",function () {
     if(flag == 0){
      full.style.top = 0
      navimg.style.opacity = 0
      flag = 1
    }else{
      full.style.top = "-100%"
      navimg.style.opacity = 1
      flag = 0
    }
      
    });


   }

   menuAnimation()


   var loader = document.querySelector("#loader")
   setTimeout (function (){
   loader.style.top = "-100%"
   },4200)
   

