function locomotivecode(){

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  

}

locomotivecode();
function mouseeffect(){

    
var page1 = document.querySelector(".page1-top");
var csr = document.querySelector("#cursor");

page1.addEventListener("mouseenter",function(){
  gsap.to(csr,{
    opacity:1,
    transform: `translate(-50%,-50%) scale(1)`,
  })
})
page1.addEventListener("mouseleave",function(){
    gsap.to(csr,{
        opacity:0,
        transform: `translate(-50%,-50%) scale(0)`,
    })
})
page1.addEventListener("mousemove",function(dets){
    gsap.to(csr,{
        left:dets.x+"px",
        top:dets.y+"px",
    })
})

}
mouseeffect();

function navbareffect(){

    var nav = document.querySelector(".click-navbar");
    var menu = document.querySelector(".nav-bar .menu");
    var closs = document.querySelector(".close");
   
    menu.addEventListener("click",function(){
       nav.style.top = "0%"
    });

    closs.addEventListener("click",function(){
        nav.style.top = "-100%"
     })


}
navbareffect();
function videocontainer(){
    var black = document.querySelector(".center-video");
    var csr2 = document.querySelector("#cursor2");
    
    black.addEventListener("mouseenter",function(){
        gsap.to(csr2,{
            opacity:1,
            transform: `translate(-50%,-50%) scale(1)`,
          })
    })
    black.addEventListener("mouseleave",function(){
        gsap.to(csr2,{
            opacity:0,
            transform: `translate(-50%,-50%) scale(0)`,
          })
    })
    black.addEventListener("mousemove",function(dets){
        gsap.to(csr2,{
            left:dets.x+"px",
            top:dets.y+"px",
        })
    })
}
videocontainer();

function loaderEffect(){
  var tl = gsap.timeline();

   tl.from("#loader h3",{
     x:50,
     duration:1,
     stagger:0.1,
     opacity:0
   })
   tl.from("#loader h3",{
    x:-50,
    delay:.5,
    duration:1,
    stagger:0.1,
    opacity:0
  })
  tl.to("#loader",{
    opacity:0
  })
  tl.to("#loader",{
   display:"none"
  })
}
loaderEffect();


//    page1 animation  start     //

function page1Effect(){
   var tl = gsap.timeline();
   tl.from(".nav-bar h4",{
      y:-100,
      opacity:0,
      duration:4,
   })
   tl.from(".page1-top h1",{
    y:100,
    opacity:0,
    duration:.8,
    stagger:.2
 })
}
page1Effect();
//    page2 animation  start     //

function page2Effect(){
    var tl = gsap.timeline();

    tl.to("#page2 .border-bottom",{
      width:"100%",
      scrollTrigger:{
        trigger:"#page2 .border-bottom",
        scroller:"#main",
        start:"top 60%",
        end:"top 10%",
        scrub:true
      }
      })

    tl.from("#page2 .barnd p",{
      y:10 ,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:"#page2 .barnd p",
        scroller:"#main",
        start:"top 60%",
        end:"top 10%",
        scrub:true
      }
    })
    tl.from("#page2 .center-text p",{
      y:10 ,
      opacity:0,
      duration:2,
      stagger:1,
      scrollTrigger:{
        trigger:"#page2 .center-text p",
        scroller:"#main",
        start:"top 60%",
        end:"top 10%",
        scrub:true
      }
    })
    tl.from("#page2 #agency small",{
      y:30 ,
      opacity:0,
      duration:2,
      stagger:1,
      scrollTrigger:{
        trigger:"#page2 #agency",
        scroller:"#main",
        start:"top 80%",
        end:"top 50%",
        scrub:4
      }
    })

    tl.from("#page2 #agency h2",{
      y:30 ,
      opacity:0,
      duration:2,
      stagger:1,
      scrollTrigger:{
        trigger:"#page2 #agency",
        scroller:"#main",
        start:"top 70%",
        end:"top 50%",
        scrub:4
      }
    })

    tl.from("#page2 .worktop h4",{
      opacity:0,
      scrollTrigger:{
        trigger:"#page2 #agency",
        scroller:"#main",
        start:"top 30%",
        end:"top 20%",
        scrub:true
      }
    })
    tl.from("#page2 .itembox1",{
      scale:.5,
      opacity:0,
      scrollTrigger:{
        trigger:"#page2 #agency",
        scroller:"#main",
        start:"top 20%",
        end:"top 10%",
        scrub:4
      }
    })
  }
 page2Effect();

//    page3 animation  start     //

 function page3animation(){

  var tl = gsap.timeline();

  tl.to("#page3 .oprate .border-bottom",{
    width:"100%",
    scrollTrigger:{
      trigger:"#page3 .oprate .border-bottom",
      scroller:"#main",
      start:"top 90%",
      end:"top 80%",
      scrub:true
    }
    })
    
  tl.from("#page3 .oprate p",{
    y:30,
    opacity:0,
    duration:1,
    stagger:3,
    scrollTrigger:{
      trigger:"#page3 .oprate p",
      scroller:"#main",
      start:"top 85%",
      end:"top 75%",
      scrub:true
    }
    })
    tl.from("#page3 .heit p",{
      y:30,
      opacity:0,
      duration:3,
      stagger:5,
      scrollTrigger:{
        trigger:"#page3 .heit p",
        scroller:"#main",
        start:"top 55%",
        end:"top 40%",
        scrub:true
      }
      })
 }
 page3animation();
 //    page3 animation  end    //


 //    page4 animation  start     //

 function page4animation(){

  var tl = gsap.timeline();

  tl.to("#page4 .oprate .border-bottom",{
    width:"100%",
    scrollTrigger:{
      trigger:"#page4 .oprate .border-bottom",
      scroller:"#main",
      start:"top 90%",
      end:"top 80%",
      scrub:true
    }
    })
    
  tl.from("#page4 .oprate p",{
    y:30,
    opacity:0,
    duration:1,
    stagger:3,
    scrollTrigger:{
      trigger:"#page4 .oprate p",
      scroller:"#main",
      start:"top 85%",
      end:"top 75%",
      scrub:true
    }
    })
    tl.from("#page4 .heit p",{
      y:20,
      opacity:0,
      duration:2,
      stagger:3,
      scrollTrigger:{
        trigger:"#page4 .heit p",
        scroller:"#main",
        start:"top 55%",
        end:"top 20%",
        scrub:true
      }
      })
 }
 page4animation();
 //    page4 animation  end    //

 function footeranimation(){
     var tl = gsap.timeline();

     tl.from(".rejouice h1",{
        y:"-10%",
        opacity:0,
        stagger:1,
        duration:3,
        scrollTrigger:{
          trigger:".rejouice h1",
          scroller:"#main",
          start:"top 30%",
          end:"top 5%",
          scrub:5
        }
     })
 }

footeranimation();



