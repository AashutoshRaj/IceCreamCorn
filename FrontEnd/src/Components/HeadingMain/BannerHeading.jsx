import React from 'react'
import styled from 'styled-components';


const HeadingStyle = styled.div` 
  position: relative;
  width:100%;
  max-width:680px;
  color: ${({ theme }) => theme.colors.whiteColor};
  &.customStyleHeading{
                  max-width: 100%;
                  margin-bottom:40px;
                  h3{
                  font-size: 130px;
                  line-height: 100%;
                  }
                  @media screen and (width <= 1440px){
                  span{
                    font-size:22px;
                  }
                  h3{
                  font-size: 75px;                 
                  }
                  }
                   @media screen and (width <= 1199px){
                   h1{
                    font-size: 60px; 
                   }
                  h3{
                  font-size: 60px;                 
                  }
                  }
                   @media screen and (width <= 575px){
                   h1{
                    font-size: 50px; 
                   }
                  h3{
                  font-size: 45px;                 
                  }
                  }
 }
    span{
        display:block;
        font-size:${({ theme }) => theme.size.doubleLarge};
        font-family:${({ theme }) => theme.fonts.alegreya};
        font-weight: bold;
        position:relative;
        max-width:max-content;
        line-height:50px;
        &::after{
        display:none
        }
        &::before{
            display:none
        }
     }
    h1{
        margin:0px;
        font-size:${({ theme }) => theme.size.h1Font};
        font-family:${({ theme }) => theme.fonts.alegreya};
        margin: 0px;      
        line-height: 95%;
        text-transform: uppercase;
    }
        h3{
        margin:0;
         font-size:88px;
         font-family:${({ theme }) => theme.fonts.alegreya};
        line-height: 76%;
         margin: 0;  
         font-weight: bold;
        }
 
  @media screen and (width <= 1440px){
  h1{
       font-size:80px;
    }
        h3{
           font-size:50px;
        }
  }

`;

const BannerHeading = ({mainTitle, subTitle, subLine, className}) => {
  return (
    <HeadingStyle className={className}>
            <span>{subTitle}</span>
            <h1>{mainTitle}</h1>  
            <h3>{subLine}</h3> 
    </HeadingStyle>
  )
}

export default BannerHeading
