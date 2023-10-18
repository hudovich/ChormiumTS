import { FC, useState, useEffect } from 'react';
import s from './NavigateSlider.module.css';
import { Link } from 'react-router-dom';
import { ISlider } from '../../../../../types/HeaderSlider';
import { useDate } from '../../../../../hook/useDate'
import { useActions } from '../../../../../hook/useActions'

const NavigateSlider:FC = () => {

  const { sliderHeader } = useDate<ISlider[]>();
  const { getSliderHeader } = useActions()

  useEffect(()=>{
    getSliderHeader();
  },[])

  let [coun, setSlide] = useState<ISlider>(sliderHeader.post[0]);
  let [idRadio, setId] = useState<string>('1');
  let nextSlid = (e:ISlider) => {
    setId(e.id);
    setSlide(e);
  }
  if(sliderHeader.isLoading){return (<>Загрузка</>)}else{
  return(
    <div className={s.category_right_box}>
      <div className={s.wrapper}>
        <div className={s.slide}>
          <div className={s.text}>
            <div className={s.sub}>
              {coun.category || null}
            </div>
            <div className={s.name}>
              {coun.name || null}
            </div>
            <div className={s.description}>
              {coun.description || null}
            </div>
            <Link to={'/0/'+coun.url} className={s.button}>shop now</Link>
          </div>
          <div className={s.images}>
            {coun.images?<img src={coun.images} />:null}
          </div>
          
        </div>
        <div className={s.radio}>
          {sliderHeader.post.map(
            (slide:ISlider) => {
              return(
                  <div key={slide.id} 
                       style={idRadio===slide.id?{backgroundColor:'#b6b6b6'}:{backgroundColor:'#fff'}} 
                       className={s.check} 
                       onClick={()=>nextSlid(slide)}>    
                  </div>
               );
              }
            )
          }
        </div>
      </div>
    </div>
  );}
}

export default NavigateSlider