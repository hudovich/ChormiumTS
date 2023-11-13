import s from './AccountEdit.module.css'
import { useDate } from '../../../hook/useDate'
import { useActions } from '../../../hook/useActions'
import { useState } from 'react';

const AccoutnEdit = () => {
  const { user } = useDate();

  let startData = {
    name:user.user.name,
    lastName:user.user.lastName,
    email:user.user.email,
    password:user.user.password,
    newPassword:'',
    address:{
      city:user.user.address.city,
      postcode:user.user.address.postcode,
      region:user.user.address.region,
      streetAddress:user.user.address.streetAddress,
    }
  }

  console.log(user.user)
  const { editUser } = useActions();
  const [ date, getAccount ] = useState(startData);
  const sendDate = (e) => {
    e.preventDefault();
    getAccount(startData)
    editUser(date);
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