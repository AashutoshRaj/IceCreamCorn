import React, { useEffect, useRef } from 'react';
import iceCream1 from './ice1.png';
import iceCream2 from './1949.jpg_wh860-removebg-preview.png';
import iceCream3 from './360_F_1452492919_sAMgrv0XLaxRPh1dxkHLeBtuHiMBxGjV-removebg-preview.png';
import styled from 'styled-components';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IceCreamWassplStyle = styled.div`
overflow:hidden;
.threeIceCream{

height: 100vh;
}  

  .iceCreamBlock {
    text-align: center;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      max-width: 500px;
      display: block;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      will-change: transform, opacity; // improve performance
    }
  }

  @media screen and (width <= 1366px){
   .iceCreamBlock {
    img {
      max-width:300px;
    }
   } 
  }
    @media screen and (width <= 575px){
   .iceCreamBlock {
    img {
      max-width:150px;
    }
   } 
  }
`;

const IceCreamWasspl = () => {
  const mainRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%",
        scrub: 0.5,
        pin: true,
        markers: false,
      },
    });

    // Main ice cream animation
    tl.fromTo(
      mainRef.current,
      { y: "0%", x: "-40%", scale: 0.4, rotate: 45, opacity: 0 },
      { y: "30%", x: "0%", scale: 1.2, rotate: 0, opacity: 1, ease: "none" }
    );

    // Top ice cream animation - enters from top and tilts
    tl.fromTo(
      topRef.current,
      { y: "-80%", x: "0%", rotate: -30, scale: 1.1, opacity: 0 },
      { y: "0%", x: "25%", rotate: 20, scale: 1.2, opacity: 1, ease: "none" }
    );

    // Bottom ice cream animation - enters from top and tilts opposite
    tl.fromTo(
      bottomRef.current,
      { y: "-20%", x: "0%", rotate: 10, scale: 1.1, opacity: 0 },
      { y: "20%", x: "-30%", rotate: -18, scale: 1.1, opacity: 1, ease: "none" }
    );
  }, []);

  return (
    <IceCreamWassplStyle >
      <div className='threeIceCream' ref={containerRef}>
      <div className='iceCreamBlock' ref={mainRef}>
        <img src={iceCream1} alt='IceCream Main' />
        <img src={iceCream2} alt='IceCream Top' ref={topRef} />
        <img src={iceCream3} alt='IceCream Bottom' ref={bottomRef} />
      </div>
      </div>
      
    </IceCreamWassplStyle>
  );
};

export default IceCreamWasspl;
