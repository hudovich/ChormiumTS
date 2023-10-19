import s from './Registration.module.css'
import { Link } from 'react-router-dom';
import { useState, FC } from 'react';
import { useActions } from '../../../hook/useActions'

const startData = {
  name:'',
  lastName: '',
  grups: 1,
  favorites:[],
  cart:[],
  email:'',
  password: '',
  orders:[],
  addres:{
    region:'',
    streetAddress:'',
    city:'',
    postcode:'',
  }
}

const Registration: FC = () => {
  const [data, getUser] = useState(startData);

  const { postUser } = useActions()

  const sendUser = (e) => {
    e.preventDefault();
    getUser(startData);
    postUser(data);
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