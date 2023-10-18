import s from './Wishlidt.module.css'
import { useEffect } from 'react'
import { useDate } from '../../hook/useDate'
import { useActions } from '../../hook/useActions'
import Footer from '../../components/layout/footer/Footer'
import Header from '../../components/layout/header/Header'

const Wishlist = () => {
  const { wishlist } = useDate()
  const { getLocal, delAllWish, delWish } = useActions();

  useEffect(()=>{
    getLocal();
  },[])
  return(
    <>
    <Header />
      <p>Wishlist</p>
      <div onClick={()=>{delAllWish()}}>Удалить все</div>
        {wishlist.wishlist.length?
          wishlist.wishlist.map(e=>{
            return(
              <div key={e.id}>
                <p>{e.product.name}</p>
                <div onClick={()=>{delWish(e.id)}}>Удалить Товар</div>
              </div>
            )
          })
        : 
        <p>There is no desire</p>
        }
    <Footer />
    </>
  )
}

export default Wishlist