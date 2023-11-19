import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'
import s from './AOrders.module.css'

const AOrders = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  useEffect(()=>{
    getAdminkaDate({url:'orders'})
  },[])
  console.log(adminka)
  if( adminka.data || adminka.data.length ){
    return(
      <>
      <div className={s.top}>
        <div className={s.name}>Blog</div>
        <button>Add</button>
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>ID USER</td>
            <td>STATUS</td>
            <td>EDIT</td>
          </tr>
        </thead>
        <tbody>
          {adminka.data.map((e)=>{
            return(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.idUser}</td>
                <td>
                  {e.status?'Sent':'In processing'}
                </td>
                <td>Edit</td>
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