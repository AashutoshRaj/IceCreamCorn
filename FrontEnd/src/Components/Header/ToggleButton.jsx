import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import bars from "./bars.jpg";

gsap.registerPlugin(ScrollTrigger);

// 🔘 Toggle Button Container
const ToggleButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  z-index: 9;
`;

// 🍔 Menu Bar Lines
const Bar = styled(motion.span)`
  display: block;
  width: 30px;
  height: 4px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
`;

// 🧊 Sidebar Style
const SideBarStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: linear-gradient(
    180deg,
    rgba(229, 49, 102, 1) 0%,
    rgba(221, 49, 40, 1) 100%
  );
  height: 100vh;
  width: 100%;
  max-width: 500px;
  box-shadow: 1px 21px 51px #0000005c;
  padding: 30px;
  overflow-y: auto;
  transition: transform 0.4s ease-in-out;
  transform: translateX(100%);
  z-index: 8;

  .sideBarMenus {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        transition: all 0.2s linear;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
          max-width: 140px;
        }

        p {
          color: ${({ theme }) => theme.colors?.whiteColor || "#fff"};
          font-size: ${({ theme }) => theme.size?.large || "16px"};
          font-family: ${({ theme }) => theme.fonts?.alegreya || "sans-serif"};
          font-weight: bold;
          margin: 0;
        }

        &:hover {
          padding-left: 15px;
        }
      }

      /* ✅ Special Style for Login */
      .login-link {
        background: #fff;
        border-radius: 8px;
        justify-content: center;
        text-align: center;
        padding: 20px 20px;
        margin-top: 30px;
        transition: all 0.3s ease;
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        border-radius: 0;

        p {
          color: #e53166;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        &:hover {
          background: #ffefef;
          transform: scale(1.05);
        }
      }
    }
  }
`;

const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef(null);

  // ✅ Correct routes for React Router
  const iceCreamNames = [
     { name: "Dashboard", image: "", path: "/dashboard" },
    { name: "Bars", image: bars, path: "/product_list" },
    { name: "Popsicles", image: bars, path: "/popsicles" },
    { name: "Low Cal Tubs", image: "", path: "/low-cal-tubs" },
    { name: "Limited Edition", image: "", path: "/limited-edition" },
    { name: "Mini Bites", image: "", path: "/mini-bites" },
    { name: "Vegan Tubs", image: "", path: "/vegan-tubs" },
    { name: "Syrup", image: "", path: "/syrup" },   
    { name: "Login", image: "", isLogin: true, path: "/login" },
  ];

  // ✅ GSAP Animation with cleanup
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(sideBarRef.current, {
          x: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        gsap.to(sideBarRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        });
      }
    });

    return () => ctx.revert(); // ✅ Clean up GSAP context safely
  }, [isOpen]);

  return (
    <>
      {/* 🍔 Toggle Button */}
      <ToggleButtonWrapper onClick={() => setIsOpen(!isOpen)}>
        <Bar
          animate={{
            y: isOpen ? 0 : -8,
            rotate: isOpen ? 45 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <Bar
          animate={{
            y: isOpen ? 0 : 8,
            rotate: isOpen ? -45 : 0,
            width: isOpen ? "30px" : "20px",
          }}
          transition={{ duration: 0.3 }}
        />
      </ToggleButtonWrapper>

      {/* 🧊 Sidebar Menu */}
      <SideBarStyle ref={sideBarRef}>
        <div className="sideBarMenus">
          <ul>
            {iceCreamNames.map((item, index) => (
              <li
                key={index}
                className={item.isLogin ? "login-link" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  {/* {item.image && <img src={item.image} alt={item.name} />} */}
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SideBarStyle>
    </>
  );
};

export default ToggleButton;
