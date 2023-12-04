import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'
import s from './AOrders.module.css'

const AOrders = () => {
  const { getAdminkaDate, appDateOrder } = useActions();
  const { adminka } = useDate();
  useEffect(()=>{
    getAdminkaDate({url:'orders'})
  },[])
  const select = (e) => {
    appDateOrder({id:e.id, data:e.data})
    getAdminkaDate({url:'orders'})
  }

  if( adminka.data || adminka.data.length ){
    return(
      <>
      <div className={s.top}>
        <div className={s.name}>Orders</div>
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>ID USER</td>
            <td style={{width:'60%'}}>ORDERS</td>
            <td>STATUS</td>
          </tr>
        </thead>
        <tbody>
          {adminka.data.map((e)=>{
            return(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.idUser}</td>
                <td>
                  {e.orders && e.orders.map((q)=>{
                    return(
                      <div key={q.id} className={s.box}>
                        <div className={s.proporties}>
                          <ul>
                            <li>ID</li>
                            <li>Name Product:</li>
                            <li>Quantity:</li>
                          </ul>
                        </div>
                        <div className={s.items}>
                          <ul>
                            <li>{q.id}</li>
                            <li>{q.product.name}</li>
                            <li>{q.quantity}</li>
                          </ul>
                        </div>
                      </div>
                    );
                  })
                  }
                </td>
                <td>
                  <div>
                    {e.status?
                      <button onClick={()=>{select({id:e.id, data:false})}}>Sent</button>
                    : 
                      <button onClick={()=>{select({id:e.id, data:true})}}>In processing</button>
                    }
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </>
    )}
    else{null}
}

export default AOrders