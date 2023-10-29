import { Link } from 'react-router-dom'
import { useEffect } from "react";
import Footer from '../../components/layout/footer/Footer'
import Header from '../../components/layout/header/Header'
import s from './CatrViev.module.css'
import Row from './Row/Row'
import { useActions } from '../../hook/useActions'
import { useDate } from '../../hook/useDate'

const CatrViev = () => {

  const { delAllProductCart, getlocalCart, appDateCartAPI, getCart } = useActions()

  const { cart, user } = useDate()
  let sub = Number(0);

  useEffect(()=>{
    if(user.user) {
      getCart(user.user.id);
    }
    if(localStorage.cart !== undefined && !user.user){
      getlocalCart();
    }
  },[user.user])

  useEffect(()=>{
    if(user.user) appDateCartAPI({idCart: cart.idCart, data: cart.productList})
  },[cart.productList])
  return(
    <>
      <Header />
        <div className={s.size}>
          <div className={s.box}>
            <div className={s.boxHeader}>
              <div className={s.namePages}>Cart</div>
              <div className={s.delButton}
                  onClick={()=>{delAllProductCart()}}
              >
                Delete All
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
              {cart.productList.map(e=>{
                return(
                    <Row key={e.product.id} data = {e}/>
                  )
                })
              }
              </tbody>
            </table>
            <div className={s.totals}>
              <div className={s.totalsName}>CART TOTALS</div>
              <div className={s.totalPrice}>
                <div className={s.item}>TOTAL</div>
                <div className={s.item}>
                  {cart.productList.map(e=>{
                    sub += e.subtotal
                  })}
                  {sub} $
                </div>
              </div>
              <Link to='/buy' className={s.chekout}>
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default CatrViev