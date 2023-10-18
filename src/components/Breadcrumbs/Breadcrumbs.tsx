import s from './Breadcrumbs.module.css'
import { FC } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs: FC = ({item}) => {
  return(
    item?
    <>
      {
        item.map( e => {
          if(e){
            return(<Link key={e[1]} className={s.a} to={e[1]}>{e[0]}</Link>);
          }
        })
      }
    </>:null
  );
}
export default Breadcrumbs;