import s from './HeaderTop.module.css'
import { Link } from 'react-router-dom';

const HedaerTop = () => {
  return(
    <>
      <div className={s.top_header}>
        <div className={s.item}>
          <ul>
            <li><Link to="/account">MY ACCOUNT</Link></li>
            <li><Link to='/wishlist'>WISHLIST</Link></li>
          </ul>
        </div>
        <div className={s.item}>
          <ul>
            <li><Link to='/login'>SING IN</Link></li>
            <li><Link to='/registr'>REGISTER</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HedaerTop;