import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import s from './Home.module.css'
import { useDate } from '../hook/useDate'
import { useActions } from '../hook/useActions'
import Header from "../components/layout/header/Header";
import NavigateHeader from "../components/layout/navigateHeader/NavigateHeader";
import AdvantagesSection from "../components/AdvanstagesSection/AdvantagesSection";
import Slider from "../components/Slider/slider";
import Footer from "../components/layout/footer/Footer";


const Home: FC = () =>{

  const { slider } = useDate()
  const { getSlider } = useActions()

  useEffect(()=>{
    getSlider()
  },[])

  return(
    <>
      <Outlet />
      <Header />
      <div>
      <div className={s.sizeTop}>
        <NavigateHeader />
      </div>
      <div className={s.size}>
      <AdvantagesSection />
      {
        slider.post.length?
          slider.post.map((e) => {
            return(
              <Slider
                key = {e.id} 
                product = {e} 
              />
            )})
        : 
          null
      }
      </div> 
      </div>
      <Footer />
    </>
  )
}

export default Home;