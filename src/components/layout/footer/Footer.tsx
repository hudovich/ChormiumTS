import s from './Footer.module.css'
import { FC } from "react";
import FooterForm from './components/FooterForm/FooterForm';
import FooterInfo from './components/FooterInfo/FooterInfo';
import FooterNavate from './components/FooterNavigate/FooterNavate';

const Footer: FC = () => {
  return(
    <div className={s.footer}>
      <div className={s.size}>
        <FooterInfo />
        <FooterNavate />
        <FooterForm />
      </div>
    </div>
  );
}

export default Footer;