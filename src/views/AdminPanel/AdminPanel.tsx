import Logo from "../../components/logo/Logo"
import image from "../../assets/logo_footer.png"
import s from "./AdminPanel.module.css"
import { Link, Outlet } from "react-router-dom"
import { useDate } from '../../hook/useDate'
import { useActions } from '../../hook/useActions'
import { useEffect } from 'react'

const AdminPanel = () => {
  const { getAutorization } = useActions();
  const { user } = useDate();
  useEffect(()=>{
    getAutorization()
  },[])
  if(user.user.grups == '2'){
  return(
    <div className={s.adminpanel}>
      <div className={s.header}>
        <Logo image={image}/>
        <Link className = {s.linkHeader} to="/">Return to home page</Link>
      </div>
      <div className={s.content}>
        <nav className={s.menu}>
          <ul>
            <li className = {s.link}><Link to="aorders">Orders</Link></li>
            <li className = {s.link}><Link to="acontact">Contact</Link></li>
            <li className = {s.link}><Link to="ablog">Blog</Link></li>
            <li className = {s.link}><Link to="aabout">About</Link></li>
            <li className = {s.link}><Link to="aslider">Slider</Link></li>
            <li className = {s.link}><Link to="aproducts">Products</Link></li>
            <li className = {s.link}><Link to="acategory">Category</Link></li>
            <li className = {s.link}><Link to="ausers">Users</Link></li>
            <li className = {s.link}><Link to="asettings">Settings</Link></li>
          </ul>
        </nav>
        <div className={s.box}><Outlet /></div>
      </div>
      <footer className={s.footer}>All rights reserved 2023 &#169;</footer>
    </div>
  )
  }else{return(<h2>No access rights</h2>)}
}

export default AdminPanel