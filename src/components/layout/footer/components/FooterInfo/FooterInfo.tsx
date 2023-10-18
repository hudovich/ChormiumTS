import s from './FooterInfo.module.css'
import { FC } from "react";
import logo from '../../../../../assets/logo_footer.png'
import Phone from '../../../../phone/Phone';

const FooterInfo: FC = () => {

  return(
    <div className={s.box}>
      <div className={s.boxMobile}>
        <div className={s.logo}>
          <img src={logo} alt='Chromium' />
        </div>
        <div className={s.addres}>
          <div className={s.icon}></div>
          <div className={s.item}> Chromium Co , 25 Silicon Road, London D04 89GR</div>
        </div>
        <div className={s.phone}>
          <div className={s.icon}></div>
          <div className={s.item}> 
            <Phone />
            Mon-Fri 8:00 to 19:00
          </div>
        </div>
        <div className={s.email}>
          <div className={s.icon}></div>
          <div className={s.item}> test@chromium.com</div>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo