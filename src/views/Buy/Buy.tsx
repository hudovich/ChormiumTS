import { useEffect, useState } from 'react';
import Footer from '../../components/layout/footer/Footer'
import Header from '../../components/layout/header/Header'
import { useActions } from '../../hook/useActions'
import { useDate } from '../../hook/useDate'
import s from './Buy.module.css'
import { useNavigate } from 'react-router-dom';

let stateState = 
{
  email: "",
  password: "",
  name: "",
  lastName: "",
  grups: 1,
    region: "",
    streetAddress: "",
    city: "",
    postcode: ""
}

const Buy = () =>{

  const [data, getDate] = useState(stateState);
  const navigate = useNavigate()
  const { user, register, wishlist, cart } = useDate()
  const { getLogin, postUser, targetSuccess, postWish, postCart, createOrder } = useActions()

  const sendOrder = (e) =>{
    e.preventDefault();
    console.log(user)
    if(user.user){
      //ордер
    }else{
      postUser({
        email:data.email,
        password:data.password,
        name:data.name,
        lastName:data.lastName,
        grups: 1,
        addres:{
          region:data.region,
          streetAddress:data.streetAddress,
          city:data.city,
          postcode:data.postcode
        }
      })
      getLogin({email:data.email, password: data.password});
    }
  }

  useEffect(()=>{
    return () => {
      if(register.success){
        postWish({wish: wishlist.wishlist, idUser: register.user.id})
        postCart({productList: cart.productList, idUser: register.user.id})
        createOrder({orders: cart.productList, idUser: register.user.id})
        targetSuccess();
      }
    }
  }, [register.success])
  
  return(
    <>
      <Header />
        <div className={s.size}>
          <div className = {s.nameBox}>Placing an order</div>
          <form>
            <div className={s.boxform}>
              <div className = {s.row}>
                <div className = {s.lastname}>
                  Lastname:
                  <input 
                    type="text" 
                    value={data.lastName}
                    placeholder='Last Name'
                    onChange={e=>getDate(prev => ({...prev, lastName:e.target.value} ))}
                  />
                </div>
                <div className = {s.name}>
                  Name:
                  <input 
                    type="text" 
                    value={data.name}
                    placeholder='Name'
                    onChange={e=>getDate(prev => ({...prev, name:e.target.value} ))}
                  /> 
                </div>
                <div className={s.email}>
                  Email:
                  <input 
                    type="text" 
                    value={data.email}
                    placeholder='Email' 
                    onChange={e=>getDate(prev => ({...prev, email:e.target.value} ))}
                  />
                </div> 
                <div className={s.password}>
                  Password:
                  <input 
                    type = "password" 
                    value={data.password}
                    onChange={e=>getDate(prev => ({...prev, password:e.target.value} ))}
                  />
                </div>
              </div>
              <div className={s.row}>
              <div className = {s.city}>
                  City:
                  <input 
                    placeholder='City'
                    value={data.city}
                    onChange={ e =>
                      getDate( prev => (
                        {...prev, city:e.target.value} 
                      ))
                    }
                  />
                </div>
                <div className={s.region}>
                  Region:
                  <input 
                    placeholder='Region'
                    value={data.region}
                    onChange={e=>getDate(prev => ({...prev, region:e.target.value} ))}
                  />
                </div>
                <div className = {s.postcode}>
                  Postcode:
                  <input 
                    placeholder='Postcode'
                    value={data.postcode}
                    onChange={e=>getDate(prev => ({...prev, postcode:e.target.value} ))}
                  />
                </div>
                <div className={s.street}>
                  Street:
                  <input 
                    placeholder='Street'
                    value={data.streetAddress}
                    onChange={e=>getDate(prev => ({...prev, streetAddress:e.target.value} ))}
                  />
                </div>
              </div>
            </div>
            <button 
              className={s.button}
              onClick={(e)=>{sendOrder(e)}}
            >
              Send
            </button>
          </form>
        </div>
      <Footer />
    </>
  )
}

export default Buy