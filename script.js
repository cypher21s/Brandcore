const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var t1 = gsap.timeline({scrollTrigger:{
    trigger:".part1",
    start: "50% 50%",
    end: "250% 50%",
    scrub:true,
   //  markers:true,
    pin:true,
}})
t1.to(".rotatediv",{
    rotate:-15,
    scale:0.8,
},'a') 
.to("#row-div-2",{
   marginTop: "-15%"
},'a') 
.to("#row-div-3",{
    marginTop: "-30%"
 },'a') 
 .to("#row-div-4",{
    marginTop: "-40%"
 },'a') 
 .to("#row-div-5",{
    marginTop: "-50%"
 },'a') 
 .to(".overlay h1",{
    opacity: "1",
    delay: 0.2,
 },'a') 
 t1.to(".overlay",{
    backgroundColor: "#000000b5",
 },'a') 
 var t2 = gsap.timeline({scrollTrigger:{
   trigger:".part2",
   start: "0% 70%",
   end: "50% 50%",
   scrub:true,
   // markers:true,
}})
t2.to(".rounded-div-wrapper",{
   height:0,
   marginTop:0
})

var t3 = gsap.timeline({
   scrollTrigger:{
      trigger:".content-2",
      start:"20% 50%",
      end: "60% 50%",
      // markers: true,
      scrub: 1
   }
});
t3.to(".text-area-hover h1",{
   width:"100%",
})
t3.to(".text-area-hover h2",{
   delay: -0.4,
   width:"100%",
})

let tl4 = gsap.timeline({
   scrollTrigger:{
       trigger: ".part4",
       start:"50% 50%",
       end: "200% 50%",
       pin: true,
       // markers: true,
       scrub: 1,
   },  
});
tl4.to(".c-one",{
   marginTop: "-25%",
   opacity:"1",
}, 'sct-1')
tl4.to(".c-two",{
   opacity:"1",
}, 'sct-2')
tl4.to(".c-one",{
   marginTop: "-100",
   opacity:"0",
}, 'sct-2')
tl4.to(".c-three",{
   opacity:"1",
}, 'sct-3')
tl4.to(".c-two",{
   opacity:"0",
}, 'sct-3')
tl4.to(".c-one",{
   marginTop:"-180%",
}, 'sct-3')
tl4.to(".c-one",{
   marginTop:"-230%",
}, 'sct-4')
tl4.to(".c-three",{
   opacity:"0",
}, 'sct-4')
tl4.to(".circle",{
   marginLeft:"100%",
   rotate: 360
}, 'sct-4')


let t5 = gsap.timeline({
   scrollTrigger:{
       trigger: ".part5",
       start:"0% 70%",
       end: "15% 50%",
      //  markers: true,
       scrub: 1,
   },  
});
t5.to(".rounded-div-wrapper-6",{
   height:"0%",
   marginTop: 0,
})


let t6 = gsap.timeline({
   scrollTrigger:{
       trigger: ".part6",
       start:"50% 50%",
       end: "300% 50%",
       pin:true,
      //  markers: true,
       scrub: 1,
   },  
});
t6.to("#demo",{
   bottom:"7%",
})
t6.to(".our-work-div",{
   height:"60vh",
}, 'height')
t6.to(".our-work-txt",{
   height:"60vh",
}, 'height')
t6.to("#Our",{
   left:"0%",
}, 'height')
t6.to("#Work",{
   right:"0%",
}, 'height')
t6.to(".scroll-img",{
   marginTop:"-300%",
})