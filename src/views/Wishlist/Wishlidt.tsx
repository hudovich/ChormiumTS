import s from './Wishlidt.module.css'
import { useEffect } from 'react'
import { useDate } from '../../hook/useDate'
import { useActions } from '../../hook/useActions'
import Footer from '../../components/layout/footer/Footer'
import Header from '../../components/layout/header/Header'
import CartProduct from '../../components/CartProduct/CartProduct'

const Wishlist = () => {
  const { wishlist, user } = useDate()
  const { getLocal, delAllWish, delWish, appDateWish } = useActions();
  useEffect(()=>{
    getLocal();
    if(user.user) appDateWish({idWish: wishlist.idWish, data: wishlist.wishlist})
  },[wishlist.wishList])
  return(
    <>
    <Header />
      <div className={s.size}>
        <div className={s.top}>
          <div className={s.globalName}>Wishlist</div>
          <div className={s.delButton} onClick={()=>{delAllWish()}}>Delete All</div>
        </div>
          <div className={s.wishList}>
            {wishlist.wishlist.length?
              wishlist.wishlist.map(e=>{
                return(
                  <div className={s.post} key={e.id}>
                    <CartProduct content={e.product} />
                    <div className={s.del} onClick={()=>{delWish(e.id)}}>Delete product</div>
                  </div>
                )
              })
            : 
            <p>There is no desire</p>
            }
          </div>
        </div>
    <Footer />
    </>
  )
}

export default Wishlist