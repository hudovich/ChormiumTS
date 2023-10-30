import s from './HeaderCart.module.css';
import favorits from '../../../../../assets/icon/favorits.png'
import { FC, useEffect } from 'react';
import CartMini from '../../../../CartMini/CartMini';
import { Link } from 'react-router-dom';
import { useDate } from '../../../../../hook/useDate'
import { useActions } from '../../../../../hook/useActions'

let HeaderCart: FC = () => {
  const { wishlist, user } = useDate()
  const { getLocal, getWish, getCart, getlocalCart, appDateWish} = useActions()

  useEffect(()=>{
    if(user.user) {
      getCart(user.user.id);
      getWish(user.user.id);
    }
    if(localStorage.cart !== undefined && !user.user){
      getLocal();
      getlocalCart(); 
    }
  },[user.user])
  
  useEffect(()=>{
    if(user.user.id && wishlist.idWish) appDateWish({idWish: wishlist.idWish, data: wishlist.wishlist})
  },[wishlist.wishlist.length, wishlist.idWish])

  return(
    <div className={s.user_action}>
        <Link to='/wishlist' className={s.favorites}>
          <img className={s.favoritsImage} src={favorits} alt="favorites" />
          <div className={s.favoritsNumber}>
            {wishlist.wishlist.length}
          </div>
        </Link>
        <CartMini />
      </div>
  );
}

export default HeaderCart;