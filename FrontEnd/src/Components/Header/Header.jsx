import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImage from "../../assets/Images/ice-cream-cup 1.png";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HeaderWrapper = styled.header`
  background-color: rgba(229, 49, 102, 0.39);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 30px);
  z-index: 100;
  border: 0px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  .logo img {
    width: 50px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      text-decoration: none;
      font-family: ${({ theme }) => theme.fonts.alegreya};
      color: white;
      font-weight: bold;
      font-size: ${({ theme }) => theme.size.large};
      transition: 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    svg {
      color: white;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    let lastScroll = 0;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrollY = self.scroll();
        if (scrollY > lastScroll && scrollY > 100) {
          // Scroll Down → Hide Header
          gsap.to(header, { y: "-120%", duration: 0.5, ease: "none" });
        } else {
          // Scroll Up → Show Header
          gsap.to(header, { y: "0%", duration: 0.5, ease: "none" });
        }
        lastScroll = scrollY;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <HeaderWrapper ref={headerRef}>
      <div className="logo">
        <img src={logoImage} alt="Ice Cream Logo" />
      </div>

      <nav>
        <Link to= "/" >Home</Link>
        <Link to= "/">Menu</Link>
        <Link to= "/">Order Type</Link>
        <Link to= "/">Contact</Link>
      </nav>

      <div className="icons">
        <ToggleButton/>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
