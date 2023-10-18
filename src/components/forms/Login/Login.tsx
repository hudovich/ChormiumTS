import s from './Login.module.css';
import { Link } from 'react-router-dom';
import { useState, FC } from 'react'

const startData = {
  login:'',
  password:'',
}

const Login: FC = () => {

  const [data, setDataUser] = useState(startData);

  const sendDataUser = (e) => {
    e.preventDefault();
    console.log(data);
    setDataUser(startData);
  }

  return(
    <>
      <div className={s.box}>
      <Link to='/' className={s.fon}></Link>
        <div className={s.form}>
          <Link to='/' className={s.exit}>X</Link>
          <div className={s.name}>Login</div>
          <div className={s.item}>
            <input 
              className={s.input} 
              type='text'
              placeholder='Username'
              value = {data.login}
              onChange={e=>setDataUser( prev =>({...prev, login:e.target.value}))}
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
        </div>
      </div>
    </>
  );
}

export default Login;