import { FC } from "react";
import s from './Advantages.module.css';

const Advantages: FC = ({item}) => {
  return(
    <div className={s.box}>
      <div className={s.images}>
        <img src={item.images} alt={item.name} />
      </div>
      <div className={s.content}>
        <div className={s.name}>{item.name}</div>
        <div className={s.description}>{item.description}</div>
      </div>
    </div>
  );
}

export default Advantages