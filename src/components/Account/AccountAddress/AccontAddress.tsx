import { useState } from 'react';
import { useDate } from '../../../hook/useDate'
import s from './AccountAddress.module.css'

let startState = {
  city:'',
  postcode: '',
  region: '',
  streetAddress:'',
}

const AccountAddress = () =>{
  const { user } = useDate();
  const [ address, getAddress ] = useState(startState)
  const sendAddress = (e) => {
    e.preventDefault();
    getAddress(startState);
    console.log(address)
  }
  return(
    <form className={s.formAccount}>
      <div className={s.first}>
        <div className={s.item}>
          City:
          <input 
            placeholder={user.user.addres.city}
            value={address.city}
            onChange={e=>getAddress(prev => ({...prev, city:e.target.value} ))}
          />
        </div>
        <div className={s.item}>
          Postcode:
          <input 
            placeholder={user.user.addres.postcode}
            value={address.postcode}
            onChange={e=>getAddress(prev => ({...prev, postcode:e.target.value} ))}
          />
        </div>
      </div>
      <div className={s.region}>
        Region:
        <input 
          placeholder={user.user.addres.region}
          value={address.region}
          onChange={e=>getAddress(prev => ({...prev, region:e.target.value} ))}
        />
      </div>
      <div className={s.street}>
        Street:
        <input 
          placeholder={user.user.addres.streetAddress}
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