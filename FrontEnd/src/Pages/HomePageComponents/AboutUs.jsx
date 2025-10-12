import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeadingMain from "../../Components/HeadingMain/HeadingMain";
import Button from "../../Components/Button/Button";
import PlayIcon from "../../assets/Icons/PlayIcon";
import IceCup from "../../assets/Images/cupBanana.png";

gsap.registerPlugin(ScrollTrigger);

const AboutUsStyle = styled.div`
  overflow: hidden;
  min-height: 100vh;
  .mainBlock {
    padding: 10vw 0;
  }
  .onTopScroll {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .sideImage {
      flex: 0 0 50%;
      text-align: center;

      .cupImage {
        width: 100%;
        height: 584px;
        max-width: 585px;
        margin: auto;
        position: relative;
        z-index: -1;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;

        &::after {
          position: absolute;
          content: "";
          width: calc(100% + 25px);
          height: calc(100% + 25px);
          left: 0;
          bottom: 0;
          z-index: -1;
          pointer-events: none;
          border-radius: ${({ borderRadius, theme }) =>
            borderRadius || theme.borderRadius.circle};
          background: rgba(229, 49, 102, 0.44);
        }

        &::before {
          position: absolute;
          content: "";
          width: calc(100% + 50px);
          height: calc(100% + 50px);
          left: 0;
          bottom: 0;
          z-index: -2;
          pointer-events: none;
          border-radius: ${({ borderRadius, theme }) =>
            borderRadius || theme.borderRadius.circle};
          background: rgba(229, 49, 103, 0.25);
        }

        img {
          width: 100%;
          max-width: 523px;
          position: relative;
          bottom: 90px;
        }
      }
    }

    .textBlock {
      flex: 0 0 50%;

      .buttonBlock {
        display: flex;
        gap: 0 60px;
        margin-top: 30px;
      }
    }
  }

  @media screen and (width <= 1366px) {
    .onTopScroll {
      .sideImage {
        .cupImage {
          height: 400px;
          max-width: 400px;
        }
      }
    }

    .textBlock {
      padding-left: 50px;
    }
  }

  @media screen and (width <= 767px){
    .onTopScroll{
      flex-direction:column;
      .sideImage{
      aspect-ratio: 1/1;
      }
    }
        .textBlock {
      padding-left:0px;
    }
  
  }
    @media screen and (width <= 767px){
    overflow:unset;
    .onTopScroll{
      flex-direction:column;
      .sideImage{
          .cupImage{
            max-width:250px;
            max-height:250px;
          }
      }
    }
        .textBlock {
          padding:15px;
    }
  
  }
`;

const AboutUs = () => {
  const cupRef = useRef(null);
  const heroBlockRef = useRef(null);
  const onTopScrollRef = useRef(null);

useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 1025px)",
      isTablet: "(min-width: 768px) and (max-width: 1024px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isDesktop, isTablet, isMobile } = context.conditions;

      // 🎯 Device-based settings
      let startPoint = "top 5%";
      let endPoint = "bottom bottom";
      let scrubSpeed = 0.5;
      let pinEnabled = true;

      if (isTablet) {
        startPoint = "top 20%";
        scrubSpeed = 0.6;
      } else if (isMobile) {
        startPoint = "top 50%"; // 👈 start later for mobile
        scrubSpeed = 0.8;
      }

      // 🎞️ Create scroll animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroBlockRef.current,
          start: startPoint,
          end: endPoint,
          scrub: scrubSpeed,
          pin: pinEnabled,
          // pinSpacing: false,
          // markers: true,
        },
      });

      tl.fromTo(
        cupRef.current,
        { y: "0%", opacity: 0, scale: 1 },
        { y: "-10%", opacity: 1, scale: 1, ease: "none", duration: 2 }
      );

      // Cleanup when component unmounts
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }
  );

  return () => mm.revert();
}, []);


  return (
    <AboutUsStyle>
      <div className="mainBlock" ref={heroBlockRef}>
        <div className="onTopScroll" ref={onTopScrollRef}>
          <div className="sideImage">
            <div className="cupImage">
              <img src={IceCup} alt="Ice Cup" ref={cupRef} />
            </div>
          </div>

          <div className="textBlock">
            <HeadingMain
              mainTitle="Enjoy Your Every Bite"
              subTitle="New Cup Cream"
              subLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <div className="buttonBlock">
              <Button buttonIcon={<PlayIcon />} className="iconBtn" />
              <Button buttonTitle="Explore more" borderRadiusMin="15px" />
            </div>
          </div>
        </div>
      </div>
    </AboutUsStyle>
  );
};

export default AboutUs;
