gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline(
  {
    scrollTrigger: {
      trigger: ".section-1",
      toggleActions: "restart restart none none",
      scrub: 1,
      pin: true,
      end: '+=4000',
    
    }
  }
)

tl.to(".inner-section",100,{
 
    scale:0.8,
  
   

})
tl.set(".text-area h1",{
 
 opacity:0,
    scale:1.05,
   

})
tl.to(".text-area h1",20,{
 
    
  opacity:1,
    scale:1,

    yoyo: true,
    repeat: 1,

    ease:"slow",
   

})
tl.set(".text-area p",{
 
    opacity:0,
       scale:1.05,
       ease:"slow",
      
   
   })
   tl.to(".text-area p",20,{
    
    delay:20,
     opacity:1,
       scale:1,
      
    
      
   
   })
   tl.to(".text-area ",50,{
    
   yPercent:-100,
   opacity:0,
   scale:0.6

      
    
      
   
   })
   tl.from(".card-wrap",50,{
    
   xPercent:100,
   autoAlpha:0,

 
       
     
       
    
    })
    tl.to(".card-wrap",50,{
    
      xPercent:-100,
      autoAlpha:1,
   
    
          
        
          
       
       })

      
    
      let revealContainers = document.querySelectorAll(".reveal");

      revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            
            toggleActions: "restart none none reset",
           
          }
        });
      
        tl2.set(container, { autoAlpha: 1 });
        tl2.from(container, 1.5, {
          xPercent: -100,
          ease: Power2.out
        });
        tl2.from(image, 1.5, {
          xPercent:100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out
        });
      });

      // let tl3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".text-wrap",
          
      //     toggleActions: "restart restart restart reset",
         
      //   }
      // });
      // tl3.to(".text-1",{
      //   duration: 0.8,
     
      //   autoAlpha:0,
      //   yPercent:10,
    
      //   yoyo: true, 
      //   repeat: 1, 
     
      //   ease: "power1.inOut",
       
      //  })
       
      //  tl3.to(".text-2",{
      //   duration: 0.8,
     
      //   autoAlpha:0,
      //   yPercent:10,
    
      //   yoyo: true, 
      //   repeat: 1, 
        
      //   ease: "power1.inOut",
       
      //  })
      //  tl3.to(".text-3",{
      //   duration:0.8,
     
      //   autoAlpha:0,
      //   yPercent:10,
    
      //   yoyo: true, 
      //   repeat: 1, 
       
      //   ease: "power1.inOut",
       
      //  })
      const components = document.querySelectorAll('.text');

    const tl3 = gsap.timeline({
      scrollTrigger: {
            trigger: ".section-3",
            
            toggleActions: "restart restart restart reset",
            end: '+=1000',
            scrub: 1,
      pin: true,
           
          }
    });

    components.forEach((component, index) => {
 
      gsap.set(component, { opacity: 0, display: 'none',yPercent:10 });

      
      tl3.to(component, {
        duration: 0.5,
        opacity: 1,
        display: 'block',
        ease: 'power3.out',
      yPercent:0,
        onStart: () => {
      
          components.forEach((otherComponent, otherIndex) => {
            if (otherIndex !== index) {
              gsap.set(otherComponent, { opacity: 0, display: 'none' });
            }
          });
        }
      });
    });
    tl3.from(".mid-img",{
      
      yPercent:40,
      duration:2
    
    })
tl3.from(".menu",{
  autoAlpha:0,
  yPercent:-100,
  duration:2

})

tl3.from(".card-3",{

  yPercent:-40,
  xPercent:20,
  autoAlpha:0,
 

  duration:2



})
tl3.from(".card-1",{

  yPercent:-40,
  xPercent:-20,

  autoAlpha:0,
 

  duration:2

})
tl3.from(".card-2",{

  yPercent:40,


  autoAlpha:0,
 

  duration:2

})


