import React, { useEffect, useRef } from 'react'
import iceOne from "./Images/advertisement-dessert-with-ice-cream-removebg-preview.png"
import styled from 'styled-components'
import gsap from 'gsap'

const SliderStyle = styled.div`
  padding: 6vw 0 0 2vw;
  width: 100%;

  .multiIceCream {
    display: grid;
    align-items: center;
    max-width: 370px;
    margin: 0 0 0 auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    background: linear-gradient(
      90deg,
      rgba(221, 49, 40, 1) 0%,
      rgba(229, 49, 102, 1) 100%
    );
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    position: relative;
    height: 191px;

    .imageBlock {
      position: relative;
      width: 100%;
      aspect-ratio: 1/1;

      img {
        position: absolute;
        max-width: 190px;
        left: 0%;
        top: -69%;
        width: 300px;
      }
    }

    .iceOff {
      text-align: center;

      h6 {
        font-size: ${({ theme }) => theme.size.pFont};
        color: ${({ theme }) => theme.colors.whiteColor};
        font-family: ${({ theme }) => theme.fonts.alegreya};
        font-weight: bold;
        margin: 0;
      }
    }

    &::after {
      position: absolute;
      content: '';
      width: calc(100% + 20px);
      height: 100%;
      background: rgba(221, 49, 40, 0.26);
      right: 0;
      top: 0;
      pointer-events: none;
      z-index: -2;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      transform: scaleY(1.05);
    }

    &::before {
      position: absolute;
      content: '';
      width: calc(100% + 40px);
      height: 100%;
      background: rgba(221, 49, 40, 0.26);
      right: 0;
      top: 0;
      pointer-events: none;
      z-index: -2;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      transform: scaleY(1.1);
    }
  }
`;

const IceCremeSlider = () => {
  const imageRef = useRef(null);


  return (
    <SliderStyle>
      <div className="multiIceCream">
        <div className="imageBlock">
          <img src={iceOne} alt="Ice Cream" />
        </div>
        <div className="iceOff">
          <h6>50% Off</h6>
          <h6>Sweet Corn</h6>
        </div>
      </div>
    </SliderStyle>
  );
}

export default IceCremeSlider;
