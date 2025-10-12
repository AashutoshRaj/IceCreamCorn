import React from 'react'
import styled from 'styled-components';



const HeadingStyle = styled.div` 
  position: relative;
  width:100%;
  max-width:740px;
  color: ${({ theme }) => theme.colors.whiteColor};
    span{
        display:block;
        font-size:${({ theme }) => theme.size.doubleLarge};
        font-family:${({ theme }) => theme.fonts.alegreya};
        font-weight: bold;
        position:relative;
        max-width:max-content;
        line-height:50px;
        &::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 4px;
        background: white;
        bottom: 0;
        right: 0;
        }
        &::before{
        content: '';
        position: absolute;
        width: calc(100% - 30px);
        height: 4px;
        background: white;
        bottom: 0;
        left: 0;
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
        p{
          padding:0 0 25px 0;
         font-size:${({ theme }) => theme.size.pFont};
         font-family:${({ theme }) => theme.fonts.alegreya};
         opacity: 0.7;
         margin: 0;        
         opacity: 0.7;
         font-weight: bold;
         text-transform: capitalize;
        }
 
  @media screen and (width <= 1440px){
  span{
   font-size:22px;
  }
   h1{
      
        font-size:80px;
        margin:15px 0;
       
    }
        p{
        
         font-size:18px;
        
        }
  }

@media screen and (width <= 575px){
  h1{
      
        font-size:50px;
        margin:15px 0;
       
    }
}

`;

const HeadingMain = ({mainTitle, subTitle, subLine, className}) => {
  return (
    <HeadingStyle className={className}>
            <span>{subTitle}</span>
            <h1>{mainTitle}</h1>  
            <p>{subLine}</p> 
          
    </HeadingStyle>
  )
}

export default HeadingMain
