
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import IceCreamTabs from '../Components/IceCreamTabs/IceCreamTabs'
import IceCreamWasspl from '../Components/IceCreamWasspl/IceCreamWasspl'
import OurTargets from '../Components/OurTargets/OurTargets'
import SundaySpecial from '../Components/SundaySpecial/SundaySpecial'
import AboutUs from './HomePageComponents/AboutUs'
import BannerHero from './HomePageComponents/BannerHero'
import TopSelling from './HomePageComponents/TopSelling'




const HomePage = () => {
  return (

    <>
      <BannerHero />
      <AboutUs />
      <IceCreamTabs />
      <TopSelling />
      <IceCreamWasspl />
      <SundaySpecial />
      <OurTargets />
    </>

  )
}

export default HomePage
