import s from './AccountEdit.module.css'
import { useDate } from '../../../hook/useDate'
import { useState } from 'react';

let startData = {
  name:'',
  lastName:'',
  email:'',
  password:'',
  newPassword:''
}

const AccoutnEdit = () => {
  const { user } = useDate();
  const [ date, getAccount ] = useState(startData);
  const sendDate = (e) => {
    e.preventDefault();
    getAccount(startData)
    console.log(date);
  }
  return(
    <>
      <form className={s.formAccount}>
        <div className={s.first}>
          <div className={s.item}>
            First name <span>*</span>
            <input 
              placeholder={user.user.name} 
              value={date.name}
              onChange={e=>getAccount( prev =>({...prev, name: e.target.value}))}
              />
          </div>
          <div className={s.item}>
            Last name <span>*</span>
            <input 
              placeholder={user.user.lastName} 
              value={date.lastName}
              onChange={e=>getAccount( prev =>({...prev, lastName: e.target.value}))}  
            />
          </div>
        </div>
        <div className={s.email}>
          Email address <span>*</span>
          <input 
            placeholder={user.user.email} 
            value={date.email}
            onChange={e=>getAccount( prev =>({...prev, email: e.target.value}))} 
          />
        </div>
        <div className={s.password}>
          <p>Password change</p>
          <div className={s.itemPass}>
            Current password (leave blank to leave unchanged)
            <input 
              type="password"
              placeholder="password" 
              value={date.password}
              onChange={e=>getAccount( prev =>({...prev, password: e.target.value}))} 
            />
          </div>
          <div className={s.itemPass}>
            New password (leave blank to leave unchanged)
            <input 
              placeholder="password" 
              type="password" 
              value={date.newPassword}
              onChange={e=>getAccount( prev =>({...prev, newPassword: e.target.value}))}  
            />
          </div>
        </div>
        <button className={s.button} onClick={(e)=>sendDate(e)} >Save changes</button>
      </form>
    </>
  )
}

export default AccoutnEdit