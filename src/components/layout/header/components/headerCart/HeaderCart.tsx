import s from './HeaderCart.module.css';
import favorits from '../../../../../assets/icon/favorits.png'
import { FC } from 'react';
import CartMini from '../../../../CartMini/CartMini';
import { Link } from 'react-router-dom';
import { useDate } from '../../../../../hook/useDate'

let HeaderCart: FC = () => {
  const { wishlist } = useDate()
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