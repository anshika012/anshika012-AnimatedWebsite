// we created timeline so that 1st  execute completely and then second animation takes palce.

var tl = gsap.timeline();
tl
.from(".st",{
    stagger:0.2,
    x:30,
    duration:1,
    ease:'Expo.easeInOut',
    opacity:0,
})

// you can use delya() function also for pause and make one animation completely occured.

.from(".s2",{
    y:30,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:1
},"-=0.5")

gsap.from(".ri8",{
    opacity:0,
    x:-10,
    duration:1,
    ease:"Expo.easeInOut",
    delay:3
})
gsap.from(".lft",{
    opacity:0,
    x:10,
    duration:1,
    ease:"Expo.easeInOut",
    delay:3
})
gsap.from("#image",{
    opacity:0,
    duration:2,
    scale:0.8,
    ease:"Expo.easeInOut",
    delay:2
})
gsap.from(".btn",{
    opacity:0,
    scale:0.2,
    duration:1,
    ease:"Expo.easeInOut",
    delay:4
})

gsap.from(".s3",{
    stagger:0.2,
    x:30,
    duration:1,
    ease:'Expo.easeInOut',
    opacity:0,
    delay:5
})

gsap.from(".swip",{
    opacity:0,
    x:-20,
    duration:1,
    delay:5,
    ease:"Expo.easeInOut"
})

gsap.from(".nm",{
    opacity:0,
    scale:0.2,
    duration:1,
    ease:"Expo.easeInOut",
    delay:4
})

