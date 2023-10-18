import { FC } from 'react';
import s from './Logo.module.css'
import { Link } from 'react-router-dom';

interface IImage{
  image:string
}

const Logo: FC<IImage> = ({image}) => {
  return(
    <div className={s.logo}>
      <Link to="/"><img src={image} alt='chromium' /></Link>
    </div>
  );
}

export default Logo;