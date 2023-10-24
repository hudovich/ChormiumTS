import s from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, FC } from 'react'
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const startData = {
  email:'',
  password:'',
}

const Login: FC = () => {

  const [data, setDataUser] = useState(startData);
  const { user } = useDate();
  const { getLogin, getCartUser } = useActions()
  const sendDataUser = (e) => {
    e.preventDefault();
    getLogin(data);
    setDataUser(startData);
  }
  const navigate = useNavigate()

  useEffect(()=>{
    if(user.user) {
      getCartUser(user.user.id);
      navigate("/account")
    }
  },[user.user])
  return(
    <>
      <div className={s.box}>
      <Link to='/' className={s.fon}></Link>
        <form className={s.form}>
          <Link to='/' className={s.exit}>X</Link>
          <div className={s.name}>Login</div>
          <div className={s.item}>
            <input 
              className={s.input} 
              type='text'
              placeholder='Username'
              value = {data.email}
              onChange={e=>setDataUser( prev =>({...prev, email:e.target.value}))}
            />
          </div>
          <div className={s.item}>
            <input 
              className={s.input} 
              type='password'
              placeholder='Password'
              value={data.password}
              onChange={e=>setDataUser( prev =>({...prev, password:e.target.value}))}
            />
          </div>
          <div className={s.button}>
            <button 
              onClick={(e)=>sendDataUser(e)} 
              className={s.button}
            >
              Login
            </button>
          </div>
            New to site?<Link to='/registr'> Create an account</Link>
        </form>
      </div>
    </>
  );
}

export default Login;