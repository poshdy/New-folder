


export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export const textVariant = (delay) => {
    return {
      hidden: {
        x: -50,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };


  export const fadeIn = {
    show:{
      transition: {
        delay:0.2,
        staggerChildren: 0.7
      }
    }
  }

  export const fadeItem = {
hidden: {
  opacity:0
},
show:{
  opacity:1,
},
exit:{
  opacity:0
}
  }


 export const letterDiv = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.8,
        duration:1
      },
    },
  };
  
 export  const letterAni = {
    initial: { y: -400 , opacity:0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
      },
    },
  };


  export const slideUp = {
    hidden:{
      y: 400,
      opacity:0
    },
    show:{
      y:0,
      opacity:1,
    },
    exit:{
      y: -400,
      opacity:0
    }
  }