import { useDate } from '../../../hook/useDate'
import { useActions } from '../../../hook/useActions'
import s from './Orders.module.css'
import { useEffect } from 'react';
const Orders = () => {

  const { user, orders } = useDate();
  const { getOrders } = useActions();

  useEffect(()=>{
    getOrders(user.user.id)
  },[])
  if(orders.orders){
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
        {orders.orders.map((e)=>{
          let status = e.status == 1 ? 'Delivered' : 'In processing'
          return(
            <tr key={crypto.randomUUID()}>
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