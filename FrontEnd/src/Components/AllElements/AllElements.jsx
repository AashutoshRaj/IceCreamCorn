import React from 'react'
import Button from '../Button/Button'
import HeadingMain from '../HeadingMain/HeadingMain'
import BannerHeading from '../HeadingMain/BannerHeading'
import IceCremeSlider from '../MiniSlider/IceCremeSlider'


const AllElements = () => {
  return (
    <div>
        <Button buttonTitle="Order Now"/>
        <BannerHeading mainTitle="CORN" subTitle="Frosty Delights" subLine="ice Cream" />
        <HeadingMain mainTitle="Enjoy Yor Every Bite" subTitle="New Cup Cream" subLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <IceCremeSlider/>
    </div>
  )
}

export default AllElements
