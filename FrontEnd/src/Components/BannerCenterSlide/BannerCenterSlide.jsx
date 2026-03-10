import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zikZak from "../../assets/Images/Vector 8.png";
import cupImage from "../../assets/Images/Rose Gold Feminine Calligraphy Monogram Logo(41) 1.png";

gsap.registerPlugin(ScrollTrigger);

const BannerCenterStyle = styled.div`
  position: relative;
  max-width: 655px;
  margin: auto;

  .centerImage {
    position: relative;
    background: rgba(221, 49, 40, 0.26);
    width: 100%;
    padding-top: 128%;
    border-radius: 50% 50% 40px 40px;
    overflow: hidden;

    .shapeOne,
    .shapeTwo {
      position: absolute;
      pointer-events: none;
      z-index: -2;
      border-radius: 50% 50% 40px 40px;
    }

    .shapeOne {
      width: calc(100% - 20px);
      height: calc(100% - 60px);
      background: rgba(221, 49, 40, 0.26);
      left: 0;
      bottom: 0;
    }

    .shapeTwo {
      width: calc(100% - 40px);
      height: calc(100% - 116px);
      background: linear-gradient(
        180deg,
        rgba(221, 49, 40, 1) 0%,
        rgba(229, 49, 102, 1) 100%
      );
      left: 0;
      bottom: 0;
    }
  }

  .zikZak {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    .sizeChange {
      transform: rotate(22deg);
      position: relative;
      right: 35px;
      top: 28px;
      max-width: 50px;
    }
  }

  .cupImage {
    position: absolute;
    top: 0;
    // left: 50%;
    // transform: translateX(-50%);
    z-index: 10;
  }

  @media screen and (width <= 1366px){
    .cupImage {
        img{
        max-width: 400px;
        }
  } 
  }

   @media screen and (width <= 1199px){
    .cupImage {
    width:100%;
    text-align: center;
        img{
           max-width:100%;
        }
  } 
  }
`;

const BannerCenterSlide = () => {
  const containerRef = useRef(null);
  const shapeOneRef = useRef(null);
  const shapeTwoRef = useRef(null);
  const cupRef = useRef(null);
  const heroBlockRef = useRef(null);

  useEffect(() => {
    // ----- ScrollTrigger timeline for cup (fade in -> fade out) -----
   const mm = gsap.matchMedia();

mm.add({ 
  isDesktop: "(min-width: 769px)",
  isMobile: "(max-width: 768px)",
}, (context) => {
  let { isDesktop, isMobile } = context.conditions;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroBlockRef.current,
      start: "top top",
      end: "bottom 5%",
      scrub: 1,
    },
  });

  if (isDesktop) {
    tl.fromTo(
      cupRef.current,
      { y: "10%", x: "10%", scale: 1.3 },
      { y: "50%", x: "-40%", scale: 1, opacity: 1, ease: "none" }
    ).to(cupRef.current, {
      y: "107%",
      x: "-80%",
      opacity: 0,
      ease: "none",
    });
  } 

  if (isMobile) {
    tl.fromTo(
      cupRef.current,
      { y: "5%", scale: 1.1 },
      { y: "120%", opacity: 0.9, ease: "power1.out" }
    ).to(cupRef.current, {
      y: "100%",
      opacity: 0,
      ease: "power1.inOut",
    });
  }
});
 


    // ----- Mouse parallax effect -----
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 2;
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to(containerRef.current, {
        x: xPos * 20,
        y: yPos * 10,
        duration: 0.5,
        ease: "power1.out",
      });

      gsap.to(shapeOneRef.current, {
        x: xPos * 20,
        y: yPos * 10,
        duration: 0.5,
        ease: "power1.out",
      });

      gsap.to(shapeTwoRef.current, {
        x: xPos * -15,
        y: yPos * -8,
        duration: 0.5,
        ease: "power1.out",
      });

      // Optional: subtle horizontal parallax for cup
    //   gsap.to(cupRef.current, {
    //     x: xPos * -5,
    //     duration: 0.5,
    //     ease: "power1.out",
    //   });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ----- Cleanup -----
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // tl.scrollTrigger.kill();
      // tl.kill();
    };
  }, []);

  return (
    <BannerCenterStyle>
      <div className="heroBannerBlock" ref={heroBlockRef}>
        <div className="zikZak">
          <img src={zikZak} alt="zikzakImage" />
          <img className="sizeChange" src={zikZak} alt="zikzakImage" />
        </div>

        <div className="centerImage" ref={containerRef}>
          <div className="shapeOne" ref={shapeOneRef}></div>
          <div className="shapeTwo" ref={shapeTwoRef}></div>
        </div>

        <div className="cupImage" ref={cupRef}>
          <img src={cupImage} alt="Cup" />
        </div>
      </div>
    </BannerCenterStyle>
  );
};

export default BannerCenterSlide;
