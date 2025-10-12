import React from 'react'
import backGroundImage from '../../../assets/Images/barsBg.jpg'
import styled from 'styled-components'
import HeadingMain from '../../../Components/HeadingMain/HeadingMain'
import Button from '../../../Components/Button/Button'
import productImage1 from "../../../assets/Images/cupBanana.png"
import Counter from '../../../Components/Counter/Counter'



const ProductPageStyle = styled.div`

.productNameHeading{
    padding:0 25px;
  }
     .allProductsCards{
      display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
    max-width: 1300px;
    margin: auto;
      margin-top: auto;
    padding-bottom: 25px;
    margin-top: 100px;
      }
    .singleProductCard {
      display: flex;
      align-items: center;
      background-color: rgba(229, 49, 102, 0.39);
      backdrop-filter: blur(15px);
      border-radius: 25px;
      padding: 15px;
     border: 1px solid #fff;
     transition: all 0.3s ease;
      .productImage{
          img{
            width:100%;
            max-width:200px;
            }
      }
       h3 {
          color: ${({ theme }) => theme.colors.whiteColor};
          font-size: ${({ theme }) => theme.size.doubleLarge};
          font-weight: bold;
          font-family: ${({ theme }) => theme.fonts.alegreya};
          margin:0;

        }
          p{
          color: ${({ theme }) => theme.colors.whiteColor};
          font-size: ${({ theme }) => theme.size.pFont};
          font-family: ${({ theme }) => theme.fonts.alegreya};
          font-weight: bold;
          }
          .priceAndButton{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 15px;
            .buttonBtn{
            background: transparent;
              border: 1px solid #fff;
              width: 100%;
              height: 43px;
              border-radius: 30px;
             color: ${({ theme }) => theme.colors.whiteColor};
              font-size: ${({ theme }) => theme.size.large};
              font-family: ${({ theme }) => theme.fonts.alegreya};
                font-weight: bold;
                cursor: pointer;
              margin-left: 15px;
               transition: all 0.3s ease;
              &:hover{
                background-color: ${({ theme }) => theme.colors.whiteColor};
                color: ${({ theme }) => theme.colors.chocoClolor};
                border-color: ${({ theme }) => theme.colors.whiteColor};
              }
            }
            }
            &:hover{
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              background-color: ${({ theme }) => theme.colors.secondary};
              border-color: ${({ theme }) => theme.colors.secondary}
               .priceAndButton{
               
                
}

}
`

const ProductListPage = ({ id, image, productName, price }) => {

  const productData = [
    {
      id: 1,
      image: productImage1,
      productName: "Chocolate Ice Bar",
      price: "$4.99",

    },
    {
      id: 2,
      image: productImage1,
      productName: "Chocolate Ice Bar",
      price: "$4.99",

    },
    {
      id: 3,
      image: productImage1,
      productName: "Chocolate Ice Bar",
      price: "$4.99",

    },
    {
      id: 4,
      image: productImage1,
      productName: "Chocolate Ice Bar",
      price: "$4.99",

    }
  ]


  return (
    <ProductPageStyle>
      <div style={{
        // backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat", backgroundImage: `url(${backGroundImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: "15vw", paddingBottom: "15vw"
      }}>

        <div className='productNameHeading'>
          <HeadingMain
            mainTitle="Bars"
            subTitle="New Ice Bars"
            subLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Button buttonTitle="Order Now" />
        </div>

        <div className="allProductsCards">
          {productData.map((items, index) => {
            return (
              <div className='singleProductCard' key={index}>
                <div className='productImage'>
                  <img src={items.image} alt={items.productName} />
                </div>
                <div className='productDetails'>
                  <h3>{items.productName}</h3>
                  <p>{items.price}</p>
                  <div className='priceAndButton'>
                    <Counter />
                    <button className='buttonBtn'>Delivery</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>




    </ProductPageStyle>
  )
}

export default ProductListPage
