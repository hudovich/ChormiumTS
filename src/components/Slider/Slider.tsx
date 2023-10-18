import { useEffect, useMemo, useState, FC } from "react";
import s from './Slider.module.css'
import SliderCart from "./SliderCart/SliderCart";
import { Link } from "react-router-dom";
import { useActions } from "../../hook/useActions"
import { useDate } from "../../hook/useDate"

const Slider: FC = ({ product }) => {

  const { slider } = useDate();
  const { getPostSlider } = useActions();
  const [ item, setPost ] = useState();
  
  useEffect(()=>{
    getPostSlider(product.category)
    if(slider.products[product.category-1] !== undefined){
      setPost(slider.products[product.category-1].product)
    }
  },[slider.products])

  let navigateSlide = (e) => {
    if (e){
      let slid = [...item];
      let elem = slid.splice(0, 1);
      slid.push(elem[0]);
      setPost(slid);
    }else{ 
      let slid = [...item];
      let elem = slid.splice(slid.length-1, 1);
      slid.unshift(elem[0]);
      setPost(slid);
    }
  }
  
  return(
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.images}>
          {product.images?<img src={product.images} alt="fon" />:null}
        </div>
        <Link to={product.category} className={s.content}>
          <div className={s.name}>{product.name}</div>
          <div className={s.description}>{product.description}</div>
          <div className={s.button}>Shop now</div>
        </Link>
      </div>
      <div className={s.right}>
        <div className={s.navigation}>
          <div className={s.selectSlider}>
          <Link to={product.category}>
            { product.name }
          </Link>
          </div>
          <div className={s.positionSlider}>
            <div className={s.arrowTop} 
                onClick={()=>navigateSlide(false)}
            >    
            </div>
            <div className={s.arrowBottom} 
                onClick={()=>navigateSlide(true)}
            >
            </div>
          </div>
        </div>
        {item?<SliderCart item={item} />:<p>Ошибка</p>}
      </div>
    </div>
  );
}

export default Slider;