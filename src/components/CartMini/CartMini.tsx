import s from './CartMini.module.css'
import cartIco from '../../assets/icon/cart.png'
import { Link } from 'react-router-dom'
import { useDate } from '../../hook/useDate'

const CartMini = () => {
  const { cart } = useDate()
  return(
    <Link to='/cart' className={s.cart}>
      <img className={s.cartImage} src={cartIco} alt="cart" />
      <div className={s.cartNumber}>
        {cart.productList.length}
      </div>
      <div className={s.cartList}>
        <div className={s.title}>MY SHOPPING CART</div>
        <div className={s.listProducts}>
        {cart.productList.length ?
          <ul>
            {cart.productList.map((e)=>{
              if (e.id>cart.productList.length-3){
                return(<li key={e.product.id}>{e.product.name}</li>)
              }
            })}
          </ul>
        :
            <p>No products in the cart.</p>
        }
        </div>
      </div>
    </Link>
  )
}

export default CartMini