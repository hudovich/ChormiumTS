import { Link, Outlet } from "react-router-dom"
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import s from "./Account.module.css"
import { useDate } from "../../hook/useDate"
import { useActions } from "../../hook/useActions"
import { useEffect } from "react"

const Account = () => {
  const { user, cart } = useDate(); 
  const { exitUser, getAutorization,  getUserCart, putCart} = useActions();
  useEffect(()=>{
    if(localStorage.token) getAutorization();
    //if(user.user.id) getUserCart(user.user.id);
    if(cart.idUser)putCart()
  },[])
console.log(cart)
  if(user.isLoading){
     return(<p>Загрузка</p>)
  }else{
  return(
    <>
      <Header />
        <div className={s.size}>
          <div className={s.box}>
            <div className={s.titlePage}>My account</div>
            {typeof user.user !== 'string' && localStorage.token?
              <div className={s.content}>
                <ul className={s.nav}>
                  
                  {true?
                    <li><Link to='/adminpanel'>AdminPanel</Link></li>
                  :null}
                  <li><Link to='/account/orders'>Orders</Link></li>
                  <li><Link to='/account/edit-account'>Account details</Link></li>
                  <li><Link to='/account/addresses'>Addresses</Link></li>
                  <li onClick={()=>exitUser()}>Logout</li>
                </ul>
                <Outlet />
              </div>
            :
              <p>You are not logged in. <Link to = '/login'>Login</Link></p>
            }
          </div>
        </div>
      <Footer />
    </>
  )
  }
}

export default Account