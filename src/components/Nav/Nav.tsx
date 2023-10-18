import { FC } from "react";
import s from './Nav.module.css'
import { Link } from 'react-router-dom';

const Nav: FC = ({cat}) => {
  return(
    <div className={s.category}>
      <div className={s.name}>CATEGORIES</div>
      <ul>
        {cat.list.map( (e) =>{
          return(
            <li className={s.item} key={e.id}><Link className={s.a} to={'/'+e.id}>{e.name}</Link></li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;