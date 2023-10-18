import { FC } from 'react';
import s from './Phone.module.css';

const Phone: FC = () => {
  return(
    <div className={s.phone} >
			<a href='tel:+48-000-000-000'>+48-000-000-000</a>
    </div>
  );
}

export default Phone;