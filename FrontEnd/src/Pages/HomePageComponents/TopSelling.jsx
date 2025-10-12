import React from 'react'
import HeadingMain from '../../Components/HeadingMain/HeadingMain'
import Button from '../../Components/Button/Button'
import styled, { useTheme } from 'styled-components'
import ProductCard from '../../Components/ProductCard/ProductCard'

const TopSellingStyle = styled.div`
   display: grid;
  grid-template-columns: repeat(2,1fr);
  align-content: center;
    max-width: 1500px;
  margin: auto;
  padding-bottom: 8vw;
  @media screen and (width <= 1366px){
    padding:15px 15px 8vw;
  }
    @media screen and (width <= 992px){
     grid-template-columns: repeat(1,1fr);
    }
     .productCardBlock{
      width:100%;
      max-width:100%;
     }
`

const TopSelling = () => {
  const theme = useTheme(); // ✅ get theme inside component

  return (
    <TopSellingStyle>
        <div className='leftSide'>
      <HeadingMain 
        mainTitle="popular ice cream" 
        subTitle="Our top selling" 
        subLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />
      
      <div className="buttonBlock">
        {/* Use theme color properly */}
        <Button 
          buttonTitle="Special Offer" 
          borderRadiusMin="15px" 
          bgColor={theme.colors.yellowColor} 
        />
      </div>
      </div>
      <div className='productCardBlock'>
            <ProductCard/>
      </div>

    </TopSellingStyle>
  )
}

export default TopSelling
