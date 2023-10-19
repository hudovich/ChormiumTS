import { Link, Outlet } from "react-router-dom"
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import s from "./Account.module.css"
import { useDate } from "../../hook/useDate"

const Account = () => {
  const { user } = useDate(); 
  if(user.isLoading){
     return(<p>Загрузка</p>)
  }else{
  return(
    <>
      <Header />
        <div className={s.size}>
          <div className={s.box}>
            <div className={s.titlePage}>My account</div>
            <div className={s.content}>
              <ul className={s.nav}>
                
                {true?
                  <li><Link to='/adminpanel'>AdminPanel</Link></li>
                :null}
                <li><Link to='/account/orders'>Orders</Link></li>
                <li><Link to='/account/edit-account'>Account details</Link></li>
                <li><Link to='/account/addresses'>Addresses</Link></li>
                <li>Logout</li>
              </ul>
              <Outlet />
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
  }
}

export default Account