let mobileMenu = document.querySelector(".mobile-menu i");
let mobileClose = document.querySelector(".navbar-mobile");
let closeIcon = document.querySelector(".navbar-mobile i");

function mobileNav(){
    
mobileMenu.addEventListener("click", function () {
    mobileClose.style.display = "block";
})

closeIcon.addEventListener("click", function () {
    mobileClose.style.display = "none";
})


}

mobileNav();

var tl=gsap.timeline();

tl.from(".page1-content-left img",{
y:"-90",
duration:"0.9",
},'1')


tl.from(".page1-content-right h1",{
y:"-90",
duration:"0.9",
},'1')


tl.from(".page1-content-right p",{
    y:"-90",
    duration:"0.9",
    },'1')

    
tl.from(".page1-btn",{
    y:"-90",
    duration:"0.9",
    },'1')

// +++++++++++++++++++++++++++++++++++++ End page1 Animations 

    gsap.from("#card2",{
    y:"-30",
    duration:"0.9",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 260vh",
        stagger:"0.5",
    
    }
    })



    gsap.from("#page2 h2,.page2-left p",{
        y:"-30",
        duration:"0.9",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 220vh",
            stagger:"0.5",
        
        }
        })

    
    

        gsap.from("#card1,#card3",{
            y:"-30",
            duration:"0.9",
            scrollTrigger:{
                trigger:"#page2",
                scroller:"body",
                start:"top 70vh",
            
            }
            })

            // +++++++++++++++++++++++++++++++++++++++ End page2 Animations 

            