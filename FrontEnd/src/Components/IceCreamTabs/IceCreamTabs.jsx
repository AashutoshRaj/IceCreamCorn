import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 🖼️ Assets
import bgImage from "./Rectangle 23.png";
import bottomBg from "./bottomImage.png";
import cone from "./cone.png";
import vanilla from "./vanila.png";
import blueberry from "./blueBarry.png";
import chocolate from "./choclate.png";
import strawberry from "./straweberry.png";
import pistachio from "./iceV1.png";
import mango from "./mango.png";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------
   🎨 Styled Components
----------------------------------*/

const MainBlock = styled.section`
  position: relative;
  overflow: hidden;

  .bgImage img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    display: block;
  }
    @media screen and(width <= 767px){
      .bgImage img {
    width: 100%;
    min-height: 80vh;
    object-fit: cover;
    display: block;
  }
    }
`;

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
   @media screen and (width <= 575px){
      justify-content:center;
`;

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  padding: 0 15px;

  button {
    background: ${({ activeColor }) => activeColor || "#fff"};
    color: #000;
    font-weight: 600;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 10px 35px;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.3s ease;
    font-family: "Grandstander", cursive;

    &:hover {
      transform: scale(1.08);
      background: #fff;
    }
  }

  button.active {
    transform: scale(1.15);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }

  /* 📱 Responsive Tabs */
  @media (max-width: 768px) {
    gap: 10px;

    button {
      font-size: 13px;
      padding: 8px 25px;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    button {
      font-size: 12px;
      padding: 6px 20px;
      border-width: 1px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConeContainer = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, #f45768 40%, transparent 70%);
    border-radius: 50%;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    z-index: -1;
    filter: blur(20px);
    opacity: 0.8;
  }

  img.coneImage {
    width: 100%;
    max-width: 600px;
    display: block;
  }

  /* 📱 Responsive Cone */
  @media (max-width: 1024px) {
    img.coneImage {
      max-width: 450px;
    }
  }

  @media (max-width: 768px) {
    img.coneImage {
      max-width: 350px;
    }
  }

  @media (max-width: 480px) {
    img.coneImage {
      max-width: 250px;
    }
  }
`;

const IceCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 📱 Responsive Circle */
  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const Scoop = styled.img`
  position: absolute;
  width: 132px;
  height: 250px;
  object-fit: contain;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  transform: ${({ active }) => (active ? "scale(1.4)" : "scale(0.8)")};
  transition: opacity 0.5s ease, transform 0.5s ease;

  /* 📱 Responsive Scoops */
  @media (max-width: 1024px) {
    width: 100px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 100px;
  }
`;

const BottomImage = styled.div`
  img {
    width: 100%;
    height: auto;
    position: relative;
    top: -15px;
    display: block;
  }
`;

/* --------------------------------
   🍦 Component Logic
----------------------------------*/

const IceCreamTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const circleRef = useRef(null);
  const iceRefs = useRef([]);
  const coneRef = useRef(null);

  const tabs = [
    { name: "Vanilla", color: "#FFF6C3", image: vanilla },
    { name: "Blueberry", color: "#C7C2FF", image: blueberry },
    { name: "Chocolate", color: "#C89B7B", image: chocolate },
    { name: "Strawberry", color: "#FFB6C1", image: strawberry },
    { name: "Pistachio", color: "#B9E6C9", image: pistachio },
    { name: "Mango", color: "#FFD86B", image: mango },
  ];

  // 🌀 Arrange scoops in circular layout
  useEffect(() => {
    const radius = window.innerWidth < 480 ? 90 : window.innerWidth < 768 ? 130 : 200;
    const total = tabs.length;

    iceRefs.current.forEach((el, i) => {
      const angle = (i / total) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      gsap.set(el, { x, y });
    });
  }, []);

  // 🍧 Animate scoops on tab click
  const handleTabClick = (index) => {
    setActiveIndex(index);
    const total = tabs.length;
    const radius = window.innerWidth < 480 ? 90 : window.innerWidth < 768 ? 130 : 200;
    const activeAngle = -index * ((2 * Math.PI) / total);

    iceRefs.current.forEach((el, i) => {
      const angle = (i / total) * Math.PI * 2 + activeAngle;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      gsap.to(el, {
        x,
        y,
        opacity: i === index ? 1 : 0.4,
        scale: i === index ? 1.4 : 0.8,
        duration: 1.2,
        ease: "power3.inOut",
      });
    });
  };

  // 🎞️ Animate cone on scroll
  useEffect(() => {
    gsap.from(coneRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: coneRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <MainBlock>
      <div className="bgImage">
        <img src={bgImage} alt="Background" />
      </div>

      <Wrapper>
        <Tabs>
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              className={activeIndex === i ? "active" : ""}
              onClick={() => handleTabClick(i)}
              style={{ backgroundColor: tab.color }}
            >
              {tab.name}
            </button>
          ))}
        </Tabs>

        <Content>
          <ConeContainer ref={coneRef}>
            <IceCircle ref={circleRef}>
              {tabs.map((tab, i) => (
                <Scoop
                  key={tab.name}
                  ref={(el) => (iceRefs.current[i] = el)}
                  src={tab.image}
                  alt={tab.name}
                  active={activeIndex === i}
                />
              ))}
            </IceCircle>
            <img src={cone} alt="Cone" className="coneImage" />
          </ConeContainer>
        </Content>
      </Wrapper>

      <BottomImage>
        <img src={bottomBg} alt="Bottom background" />
      </BottomImage>
    </MainBlock>
  );
}; 

export default IceCreamTabs;
