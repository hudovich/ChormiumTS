import s from './Registration.module.css'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useState, useEffect, FC } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const startData = {
  name:'',
  lastName: '',
  grups: 1,
  email:'',
  password: '',
  addres:{
    region:'',
    streetAddress:'',
    city:'',
    postcode:'',
  }
}

const Registration: FC = () => {
  const { register } = useDate();
  const { postUser, postWish, postCart } = useActions()
  const [data, getUser] = useState(startData);
  const sendUser = (e) => {
    e.preventDefault();
    getUser(startData);
    postUser(data);
  }

  const navigate = useNavigate()
  useEffect(()=>{
    if(register.success){
      postWish({wish: [], idUser: register.user.id})
      postCart({productList: [], idUser: register.user.id})
    }
    if(register.success) navigate("/account");
  },[register.success])

    return(
      <>
        <div className={s.box}>
          <Link to='/' className={s.fon}></Link>
          <form className={s.form}>
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
          </form>
        </div>
      </>
    );
  
}

export default Registration