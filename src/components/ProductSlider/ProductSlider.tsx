import { useState, FC } from 'react';
import s from './ProductSlider.module.css'

 const ProductSlider: FC = ({item}) => {
  let [count, setSlide] = useState(0);
  return(
    <div className={s.wrapper}>
      <div className={s.images}>
        {item.length?
          <img src={item[count].url} alt='' />
        :<p>No photo</p>}
      </div>
      <div className={s.list}>
      {item.length?
        item.map(e => { 
          return(
            <img src={e.url} key={e.id} onClick={()=> setSlide(e.id-1)}className={s.minImages} alt={1} />
          );
        })
      :null}
      </div>
    </div>
  );
 }

 export default ProductSlider;