import { FC } from 'react';
import s from './NavigateButton.module.css'

let NavigateButton: FC = () =>{

  return(
    <div className={s.name_category_main}>
      <div className={s.icon_burg}>
        <span className={s.line}></span>
      </div>
      SHOP DEPARTMENTS
    </div>
  );
}

export default NavigateButton;