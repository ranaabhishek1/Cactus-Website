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


            gsap.from("#box1,#box2,#box3",{
                y:"-30",
                duration:"0.8",
                scrollTrigger:{
                    trigger:"#page3",
                    scroller:"body",
                    start:"top 10vh",
                    stagger:"0.5",
                    
                
                }
                })
    
                
            gsap.from("#box4,#box5,#box6",{
                y:"-30",
                duration:"0.8",
                scrollTrigger:{
                    trigger:"#page3",
                    scroller:"body",
                    start:"bottom 580vh",
                    stagger:"0.5",
                
                }
                })
// +++++++++++++++++++++++++++++++++++++ End page3 Animations 

                
gsap.from(".page4-left img",{
    y:"30",
    duration:"0.8",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 10vh",
        stagger:"0.5",
    
    }
    })


    
gsap.from(".page4-right p",{
    y:"-30",
    duration:"0.8",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 10vh",
        stagger:"0.5",
    
    }
    })

    // page4 image animation on working