import s from './CartProduct.module.css'
import { FC } from "react";
import WishIcon from '../../assets/icon/wish.js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../../hook/useActions'

const CartProduct: FC = ({content}) => {
  const { addWish } = useActions();
  const category = useSelector(state=>state.category.list);

  const cat = category.find(e => {
    if(e.id==content.category[0]){
      return  e;
    }
  })
  if(cat !== undefined){
    return(
      <div className={s.box}>
        <div className={s.like} onClick={()=>{addWish({wishlist:content})}}>
          <WishIcon id={content.id}/>
        </div>
        <Link to={'/'+cat.id+'/'+content.id}>
          <div className={s.top}>
            {
              content.promotion ?

              <div className={s.promotion}>
                {content.promotion}
              </div>
            :
              null
            }
            <div className={s.images}>
            {content.images[0]?
              <img src={content.images[0].url || null} alt={content[1]} />
            : null}
            </div>
          </div>
          <div className={s.content}>
            <div className={s.category}>
              {cat.name || null}
            </div>
            <div className={s.name}>
              {content.name || null}
            </div>
            <div className={s.rating}>
              {content.rating || null}
            </div>
            <div className={s.price}>
              {content.price +' $'|| null}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CartProduct