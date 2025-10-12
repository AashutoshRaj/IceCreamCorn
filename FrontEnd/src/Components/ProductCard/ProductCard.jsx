import React from "react";
import styled from "styled-components";
import ShoppingBag from './shopping-bag 1.png'
import imageProduct from '../../assets/Images/cupBanana.png'
import imageProduct2 from '../../assets/Images/productImage1 (1).png'
import { lighten, transparentize } from 'polished';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// ---- Styled Components ----
const CartIceCreamStyle = styled.div`
display: grid;
  grid-template-columns: repeat(2,1fr);
  align-content: center;
  font-family: ${({ theme }) => theme.fonts.alegreya};
  
  .cartPrice{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
`
const Card = styled.div`
  // background-color: #f86f5d; /* card background */
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  width: 100%
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.alegreya || "sans-serif"};
  position: relative;
  // overflow: hidden;
  @media screen and (width <= 767px){
   padding:8px;
  }
`;

const ImageWrapper = styled.div`
  // background: linear-gradient(135deg, #ffc107, #ff9800);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;
  background:rgb(253 210 80 / 46%);
   border-radius: ${({ borderRadiusMin, borderRadius, theme }) =>
    borderRadiusMin || borderRadius || theme.borderRadius.normal};  
  aspect-ratio: 1/1;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: calc(100% - 30px);
  height: calc(100% - 30px);
     background: rgb(253 210 80 / 24%);
   left: 0;
  bottom: 0;
    pointer-events: none;
    z-index: -1;
    border-radius: ${({ borderRadiusMin, borderRadius, theme }) =>
    borderRadiusMin || borderRadius || theme.borderRadius.normal};  
     @media screen and (width <= 767px){
       width: calc(100% - 15px);
  height: calc(100% - 15px);
     }
  }
  &::before {
    position: absolute;
    content: '';
    width: calc(100% - 60px);
  height: calc(100% - 60px);
   background: #fdd250;
    left: 0;
  bottom: 0;
    pointer-events: none;
    z-index: -2;
    border-radius: ${({ borderRadiusMin, borderRadius, theme }) =>
    borderRadiusMin || borderRadius || theme.borderRadius.normal};
    @media screen and (width <= 767px){
       width: calc(100% - 30px);
  height: calc(100% - 30px);
     }  
  }
  img{
   position: absolute;
  right: -58px;
  top: -55px;
  width: 100%;
  max-width: 260px;
  @media screen and (width <= 767px){
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 260px;
  transform: translate(-50%,-50%);
  }
  }
`;

const IceCreamImage = styled.img`
  width: 100%;
  max-width: 160px;
  display: block;
  margin: auto;
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 10px 0 5px;
 font-family: ${({ theme }) => theme.fonts.alegreya};
  font-size: ${({ theme }) => theme.size.doubleLarge};
  text-align: left;
  color:${({ theme }) => theme.colors.whiteColor};

  @media screen and (width <= 767px){
    font-size: ${({ theme }) => theme.size.medium};
  }
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.size.doubleLarge};
   color:${({ theme }) => theme.colors.whiteColor};
   font-family: ${({ theme }) => theme.fonts.alegreya};
    font-weight: bold;
    text-align:left;
    opacity:0.7;
  margin: 0 0 5px;
   @media screen and (width <= 767px){
    font-size: ${({ theme }) => theme.size.medium};
  }

`;

const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0 15px;
  font-size: ${({ theme }) => theme.size.doubleLarge};
   color:${({ theme }) => theme.colors.whiteColor};
   font-family: ${({ theme }) => theme.fonts.alegreya};
    font-weight: bold;
     @media screen and (width <= 767px){
    font-size: ${({ theme }) => theme.size.medium};
  }
`;

const Button = styled.button`
  background-color: #ffc107;
  border: none;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;

  &:hover {
    background-color: #ff9800;
  }
`;

// ---- Component ----
const ProductCard = ({ image, title, subTitle, price }) => {

  const productName = [
    {
      title: "Soft banana, Cholate Flyover",
      subTitle: "ice cream",
      price: "Rs. 350/-",
      image:imageProduct
    },
    {
      title: "Soft banana, Cholate Flyover",
      subTitle: "ice cream",
      price: "Rs. 350/-",
      image:imageProduct2
    }
  ]

  return (
    <CartIceCreamStyle>
       
    
        {/* <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
          
      

      
      {productName.map((item, index) => (
        <Card>
          <ImageWrapper >
            <img src={item.image} alt={title} />
          </ImageWrapper>
          <Title>{item.title}</Title>
          <SubTitle>{item.subTitle}</SubTitle>
          <div className="cartPrice">
            <Price>{item.price}</Price>
            <Button>
              <img src={ShoppingBag} alt="ShoppingBag Icon" />
            </Button>
          </div>

        </Card>
      ))} 



    </CartIceCreamStyle>
  );
};

export default ProductCard;
