import React from "react";
import BannerHeading from "../../Components/HeadingMain/BannerHeading";
import Button from "../../Components/Button/Button";
import PlayIcon from "../../assets/Icons/PlayIcon";
import IceCremeSlider from "../../Components/MiniSlider/IceCremeSlider";
import styled from "styled-components";
import BannerCenterSlide from "../../Components/BannerCenterSlide/BannerCenterSlide";

const BannerStyle = styled.div`
  display: flex;
  min-height: 100vh;
  align-content: end;
  padding: 0 0 0 25px;
  .contentHero {
    align-content: center;
    .buttonBlock {
      display: flex;
      gap: 0 60px;
      margin-top: 30px;
    }
  }
  .centerBlock {
    align-content: end;
    flex: 1;
  }
  .sideRightSlides {
    align-items: end;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    max-width: 438px;
  }

  @media screen and (width <= 1366px) {
    padding-top: 117px;
    .centerBlock {
      align-content: center;
    }
    .buttonBlock {
      gap: 0 50px;
      margin-right: 15px;
    }
  }
  @media screen and (width <= 1199px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 100px 15px 15px;
    .contentHero {
      width: 100%;
      max-width: 350px;
      margin: 50px auto;
    }
    .centerBlock {
      width: 100%;
    }
    .sideRightSlides {
      flex-direction: revert;
      width: 100%;
      max-width: 100%;
      display: none;
    }
    .buttonBlock {
    }
  }

  @media screen and (width <= 767px){
    flex-direction: column;
    // overflow: hidden;
    .contentHero{
      order:1;
      max-width:100%;
    }
  }
`;
const BannerHero = () => {
  return (
    <div>
      <BannerStyle>
        <div className="contentHero">
          <BannerHeading
            mainTitle="CORN"
            subTitle="Frosty Delights"
            subLine="ice Cream"
          />
          <div className="buttonBlock">
            <Button buttonTitle="Order Now" />
            <Button buttonIcon={<PlayIcon />} className="iconBtn" />
          </div>
        </div>
        <div className="centerBlock">
          <BannerCenterSlide />
        </div>

        <div className="sideRightSlides">
          <IceCremeSlider />
          <IceCremeSlider />
          <IceCremeSlider />
        </div>
      </BannerStyle>
    </div>
  );
};

export default BannerHero;
