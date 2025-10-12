import React, { useEffect, useRef } from 'react'
import HeadingMain from '../HeadingMain/HeadingMain'
import styled from 'styled-components'
import iceImage from './pngtree-mango-ice-cream-in-glass-cup-with-slices-png-image_20958667-removebg-preview.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SpecialStyle = styled.div`
.innerBlock{
  background-color: ${({ theme }) => theme.colors.yellowColor};
  padding: 7.813vw 15px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  min-height: 100vh;
  overflow:hidden;
}


  a {
    display: block;
    font-size: ${({ theme }) => theme.size.doubleLarge};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-family: ${({ theme }) => theme.fonts.alegreya};
    font-weight: bold;
  }

  .spaecialICe {
    text-align: center;

    img {
      width: 100%;
      max-width: 500px;
    }
  }
    @media screen and (width <= 575px){
.innerBlock{

grid-template-columns: repeat(1,1fr);
}
    }
`;

const SundaySpecial = () => {
  const specialCupRef = useRef(null);
  const freeBlockRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: freeBlockRef.current,
        start: "top 0%",
        end: "+=100%",
        scrub: 0.5,
        pin: true,
        // markers: true, // for debugging
      },
    });

    // First animation
    tl.fromTo(
      specialCupRef.current,
      { y: "0%", x: "100%", scale: 1, opacity: 0 },
      { y: "0%", x: "0%", width: "100%", opacity: 1, scale:1.4, ease: "power2.out", duration: 1 }
    );

    // Second animation (after the first finishes)
    // tl.to(specialCupRef.current, {
    //   y: "0%",
    //   ease: "power2.inOut",
    //   duration: 2,
    //   scale:1.2,
    // });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <SpecialStyle >
        <div className='innerBlock' ref={freeBlockRef}>
           <div className='headingArea'>
        <HeadingMain
          mainTitle=" buy 2 Get 1 Free"
          subTitle="On Sunday Special"
        />
        <a href=''>Get Now</a>
      </div>

      <div className='spaecialICe' ref={specialCupRef}>
        <img src={iceImage} alt='Special Offer Ice Cream' />
      </div>
        </div>
    </SpecialStyle>
  );
}

export default SundaySpecial;
