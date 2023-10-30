import { useState, FC } from 'react';
import s from './Product.module.css'
import ProductSlider from '../ProductSlider/ProductSlider';
import { useActions } from '../../hook/useActions'
import { useDate } from '../../hook/useDate'

const Product:FC = ({item}) => {
  const [count, setBuy] = useState(1);

  const { addProductCart, addWish } = useActions();
  const { wishlist } = useDate()

  const target = wishlist.wishlist.some(e=>e.id == item.id);

  const addCart = () => {
    addProductCart({product:item, quantity:count, subtotal:item.price*count})
  }

  return(
    <>
      <div className={s.box}>
        <div className={s.images}>
          <ProductSlider item={item.images?item.images:null}/>
        </div>
        <div className={s.info}>
          <div className={s.name}>{item.name}</div>
          <div className={s.description}>{item.description}</div>
          <div className={s.price}>{item.price} $</div>
          <div className={s.navigate}>
            <div className={s.count}>
              <span onClick={()=>setBuy(1<count?count-1:1)}>-</span>
              <span>{count}</span>
              <span onClick={()=>setBuy(count+1)}>+</span>
            </div>
            <div className={s.button} onClick={()=>{addCart()}}>Add to cart</div>
          </div>
          <div className={s.wishlist} onClick={()=>{addWish({wishlist:item})}}>
            {target?<>Remove from wishlist</>:<>Add to Wishlist</>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;