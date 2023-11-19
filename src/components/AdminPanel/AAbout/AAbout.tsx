import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'
import s from './AAbout.module.css'

const AAbout = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  useEffect(()=>{
    getAdminkaDate({url:'about'})
  },[])
  if(adminka.data || adminka.data.length){
  return(
    <>
    <div className={s.top}>
      <div className={s.name}>About</div>
      <button>Add</button>
    </div>
    <table className={s.table}>
      <thead>
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>DESCRIPTION</td>
          <td>IMAGES</td>
          <td>NAVIGATION</td>
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
                {e.images?
                  <img src={e.images} alt={e.name}/>
                :null}
              </td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
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

export default AAbout