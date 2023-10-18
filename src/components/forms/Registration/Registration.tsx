import s from './Registration.module.css'
import { Link } from 'react-router-dom';
import { useState, FC } from 'react';

const startData = {
  name:'',
  email:'',
  password:'',
}

const Registration: FC = () => {
  const [data, getUser] = useState(startData);

  const sendUser = (e) => {
    e.preventDefault();
    console.log(data);
    getUser(startData);
  }

  return(
    <>
      <div className={s.box}>
        <Link to='/' className={s.fon}></Link>
        <div className={s.form}>
          <Link to='/' className={s.exit}>X</Link>
          <div className={s.name}>REGISTER</div>
          <div className={s.item}>
            <input className={s.input} 
                  type='text'
                  placeholder='Username'
                  value={data.name}
                  onChange={(e)=>getUser(prev=>({...prev, name:e.target.value}))}
            />
          </div>
          <div className={s.item}>
            <input className={s.input} 
                  type='e-mail'
                  placeholder='E-mail'
                  value={data.email}
                  onChange={(e)=>getUser(prev=>({...prev, email:e.target.value}))}
            />
          </div>
          <div className={s.item}>
            <input className={s.input} 
                  type='password'
                  placeholder='Password'
                  value={data.password}
                  onChange={(e)=>getUser(prev=>({...prev, password:e.target.value}))}
            />
          </div>
          <div className={s.button}>
            <button onClick={(e)=>sendUser(e)}>Login</button>
          </div>
            Already have an account? <Link to='/login'>Login</Link>
        </div>
      </div>
    </>
  );
}

export default Registration