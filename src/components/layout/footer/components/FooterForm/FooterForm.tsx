import s from './FooterForm.module.css'
import { useState, FC } from 'react';

const FooterForm: FC = () => {

  const [value, setEmail] = useState('');

  const formValue = () =>{
    console.log(value);
  }

  return(
    <div className={s.box}>
      <div className={s.name}>
        SUBSCRIBE AND GET 5% OFF DISCOUNT
      </div>
      <div className={s.description}>
        Subscribe to our Newsletter and get bonuses for the next purchase
      </div>
      <div className={s.input}>
        <input 
            type="text" 
            placeholder='Enter Your E-mail Here'
            onChange={(e)=>setEmail(e.target.value)}
        />
        <div 
            className={s.button}
            onClick={()=>{formValue()}}
        >
          ОК
        </div>
      </div> 
    </div>
  );
}

export default FooterForm