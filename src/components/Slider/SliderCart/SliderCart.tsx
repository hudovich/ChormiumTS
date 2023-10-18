import CartProduct from '../../CartProduct/CartProduct';
import { FC } from "react";
import s from './SliderCart.module.css';


const SliderCart: FC = ({item}) => {
  return(
    <div className={s.box}>
      {item.map((e)=>{
        return(
          <div key={e.id} className={s.slide}>
            <CartProduct content = {e} />
          </div>
        );
      })}
    </div>
  );
}

export default SliderCart;