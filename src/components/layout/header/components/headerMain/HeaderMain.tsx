import { FC, useState } from 'react';
import s from './HeaderMain.module.css';
import { Link } from 'react-router-dom';

const HeaderMain: FC = () => {

  let [count, setCount] = useState<string>((window.innerWidth>865)?'flex':'none');

  let style = () => {
    if (count === 'block')
      setCount('none')
    else{
      setCount('block')
    }
  }
  return(
    <>
      <div className={s.nav_button_mobile} onClick={() => style()}>
        <div className={s.nav_bar_modile}>
          <span className={s.line_burger}></span>
        </div>
        Menu
      </div>
      <ul className={s.nav} style={{display:count}}>
        <li><Link to='/'>Home</Link></li>
        <li className={s.switch_active}>
        <Link to='/'>Shop</Link>
          <ul className={s.selector_header_main}>
            <li><Link to='/wishlist'>Wishlist</Link></li>
            <li><Link to='/account'>My account</Link></li>
          </ul>
        </li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/contact'>Contacts</Link></li>
      </ul>
    </>
  );
};

export default HeaderMain;