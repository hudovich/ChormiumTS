import s from './HeaderTop.module.css'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDate } from '../../../../../hook/useDate'
import { useActions } from '../../../../../hook/useActions'

const HedaerTop = () => {
  const { user } = useDate();
  const { getAutorization } = useActions();
  useEffect(()=>{
    if(!user.user && localStorage.token && localStorage.idUser) getAutorization();
  },[]);
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
            {user.user?
              <li>Hello <Link to="/account">{user.user.name}</Link></li>
            : 
              <>
                <li><Link to='/login'>SING IN</Link></li>
                <li><Link to='/registr'>REGISTER</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default HedaerTop;