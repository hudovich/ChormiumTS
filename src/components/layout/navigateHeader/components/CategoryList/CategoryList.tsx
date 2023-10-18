import s from './CategoryList.module.css';
import { Link } from 'react-router-dom';
import { FC, useEffect } from "react";
import { useDate } from "../../../../../hook/useDate"
import { useActions } from "../../../../../hook/useActions"

const CategoryList:FC = () => {

  const { category } = useDate()
  const { getCategory } = useActions()
  useEffect(()=>{
    getCategory()
  },[])
  
  return (
    <div className={s.category_list}>
        <ul>
          {category.list.map((e)=>{ 
            return(
              <li key={e.id}>
                <Link to={e.id}>{e.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
  );
}

export default CategoryList;