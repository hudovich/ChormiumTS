import { useDate } from '../../../hook/useDate'
import s from './Orders.module.css'
const Orders = () => {

  const { user } = useDate(); 
  if(user.user.orders.length){
    return(
      <table className={s.list}>
        <thead className={s.order}>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={s.order}>
        {user.user.orders.map((e)=>{
          let status = e.status == 1 ? 'Delivered' : 'In processing'
          return(
            <tr key={e.id}>
              <th className={s.name}>{e.product.name || null} </th>
              <th className={s.quantity}>{e.quantity || null} </th>
              <th className={s.subtotal}>{e.subtotal || null} </th>
              <th className={s.status}>{status || null} </th>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }else{
    return(
        <p>No order has been made yet.</p>
    )
  }
}

export default Orders;