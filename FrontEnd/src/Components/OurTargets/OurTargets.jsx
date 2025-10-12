import React from "react";

import BannerHeading from "../HeadingMain/BannerHeading";
import styled from "styled-components";
import icon1 from "./loan 1.png";
import icon2 from "./store 1.png";
import Button from "../Button/Button";

const TargetStyle = styled.div`
  padding: 8vw 15px;
  height: 100vh;
  .innerBlock {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 3vw;
    .customStyleHeading {
    }
    .valuesTarget {
      .blocks {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-content: center;
        max-width: 610px;
        width: 100%;
        margin: auto;
        gap: 3vw;
        .card {
          background: ${({ theme }) => theme.colors.whiteColor};
          border-radius: ${({ theme }) => theme.borderRadius.capsule};
          aspect-ratio: 1/1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 300px;
          margin: 0 auto;
          width: 100%;
          flex-direction: column;

          .icon {
            display: flex;
            width: 50px;
            height: 50px;
            padding: 5px;
            justify-content: center;
            align-items: center;
            background: ${({ theme }) => theme.colors.primary};
            border-radius: ${({ theme }) => theme.borderRadius.large};
            margin-bottom: 15px;
            img {
              width: 100%;
            }
          }
          .valueBlock {
            h3 {
              font-size: ${({ theme }) => theme.size.doubleLarge};
              font-family: ${({ theme }) => theme.fonts.alegreya};
              font-weight: bold;
              color: ${({ theme }) => theme.colors.primary};
              margin: 0;
              text-align: center;
              @media screen and (width <= 575px) {
                font-size: 30px;
              }
            }
          }
        }
      }
    }
  }
     @media screen and (width <= 992px) {
    .innerBlock {
      
      .valuesTarget {
       
        .blocks {
          .card {
            border-radius: 30px;
          }
        }
      }
    }
  }
  @media screen and (width <= 768px) {
    .innerBlock {
      grid-template-columns: repeat(1, 1fr);
      .valuesTarget {
        order: 1;
        .blocks {
          .card {
            border-radius: 30px;
          }
        }
      }
    }
  }

  

`;

const OurTargets = () => {
  const cardData = [
    {
      icon: icon1,
      value: "10K+",
      text: "DAILY SELL",
    },
    {
      icon: icon2,
      value: "2K+",
      text: "Outlets",
    },
  ];
  return (
    <TargetStyle>
      <div className="innerBlock">
        <div className="valuesTarget">
          <div className="blocks">
            {cardData.map((item, index) => {
              return (
                <div className="card">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="valueBlock">
                    <h3>{item.value}</h3>
                    <h3>{item.text}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="">
          <BannerHeading
            subTitle="Why choose us"
            mainTitle=" fast and best"
            subLine="quality ice cream"
            className="customStyleHeading"
          />
          <div className="reviewStars">
            <Button
              buttonTitle="know more"
              borderRadiusMin="15px"
              bgColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </TargetStyle>
  );
};

export default OurTargets;
