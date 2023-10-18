import { Link } from 'react-router-dom';
import { FC } from "react";
import s from './Blog.module.css'

const Blog: FC = ({item}) => {
  return(
    <Link className={s.box} to={item.id}>
      <div className={s.images}>
        {item.images?
          <img src={item.images || null} alt={item.name} />
        :<p>No photo</p>}
      </div>
      <div className={s.name}>{item.name || null}</div>
      <div className={s.author}>{item.author || null}</div>
      <div className={s.description}>{item.subDescription || null}</div>
    </Link>
  );
}

export default Blog;