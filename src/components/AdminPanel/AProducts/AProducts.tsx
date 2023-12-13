import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'
import s from './AProducts.module.css'
import { Link } from 'react-router-dom';

const AProducts = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  useEffect(()=>{
    getAdminkaDate({url:'product'})
  },[])
  if( adminka.data || adminka.data.length ){
    return(
      <>
      <div className={s.top}>
        <div className={s.name}>Products</div>
        <Link to='add'>Add</Link>
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>DESCRIPTION</td>
            <td>IMAGES</td>
            <td>EDIT</td>
          </tr>
        </thead>
        <tbody>
          {adminka.data.map((e)=>{
            return(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>
                  {e.images.length?
                    <img className={s.images} src={e.images[0].url} alt={e.name}/>
                  : false
                  }
                </td>
                <td><Link to={e.id}>Edit</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </>
    )}
    else{null}
}

export default AProducts