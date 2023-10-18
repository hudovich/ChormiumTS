import { FC } from "react";
import s from './Header.module.css'
import logo from '../../../assets/logo.png'
import Logo from "../../logo/Logo";
import HeaderMain from "./components/headerMain/HeaderMain";
import HeaderCart from "./components/headerCart/HeaderCart";
import HedaerTop from "./components/headerTop/HeaderTop";

const Header: FC = () => {
  return(
    <header>
      <HedaerTop />
      <div className={s.content_header}>
      <Logo image={logo}></Logo>
      <HeaderMain /> 
      <HeaderCart />
    </div>
		</header>
  );
}

export default Header;