import { useSelector } from 'react-redux';
import { FC } from "react";
import s from './FooterNavigate.module.css'
import { Link } from 'react-router-dom';

const FooterNavigate:FC = () => {

  const pagesList = useSelector(state=>state.pages)
  return(
    <div className={s.box}>
      <div className={s.name}>WHY BUY FROM US</div>
      {pagesList?
      <ul>
        {pagesList.map(e => <li className={s.item} key={e.id}><span className={s.dot}></span><Link to={e.url}>{e.name}</Link></li>)}
      </ul>
      :
        <>loading error</>
      }
    </div>
  );
}

export default FooterNavigate