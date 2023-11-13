import { useState } from 'react';
import { useDate } from '../../../hook/useDate'
import { useActions } from '../../../hook/useActions'
import s from './AccountAddress.module.css'

const AccountAddress = () =>{
  const { user } = useDate();
  const { editUser } = useActions();
  let startState = {
    city:user.user.address.city,
    postcode: user.user.address.postcode,
    region: user.user.address.region,
    streetAddress: user.user.address.region,
  }
  const [ address, getAddress ] = useState(startState)
  const sendAddress = (e) => {
    e.preventDefault();
    getAddress(startState);
    editUser({
      email: user.user.email,
      password: user.user.password,
      name: user.user.name,
      lastName: user.user.lastName,
      address:{
        city:address.city,
        postcode:address.postcode,
        region:address.region,
        streetAddress:address.streetAddress,
      }
    })
  }
  return(
    <form className={s.formAccount}>
      <div className={s.first}>
        <div className={s.item}>
          City:
          <input 
            placeholder={user.user.address.city}
            value={address.city}
            onChange={e=>getAddress(prev => ({...prev, city:e.target.value}))}
          />
        </div>
        <div className={s.item}>
          Postcode:
          <input 
            placeholder={user.user.address.postcode}
            value={address.postcode}
            onChange={e=>getAddress(prev => ({...prev, postcode:e.target.value} ))}
          />
        </div>
      </div>
      <div className={s.region}>
        Region:
        <input 
          placeholder={user.user.address.region}
          value={address.region}
          onChange={e=>getAddress(prev => ({...prev, region:e.target.value} ))}
        />
      </div>
      <div className={s.street}>
        Street:
        <input 
          placeholder={user.user.address.streetAddress}
          value={address.streetAddress}
          onChange={e=>getAddress(prev => ({...prev, streetAddress:e.target.value} ))}
        />
      </div>
      <button 
        className={s.button}
        onClick={(e)=>sendAddress(e)}
      >
        Save changes
      </button>
    </form>
  )
}

export default AccountAddress;