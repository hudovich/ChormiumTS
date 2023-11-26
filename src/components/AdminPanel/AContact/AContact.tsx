import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'
import s from './AContact.module.css'

const AContact = () =>{
  const { getAdminkaDate, dellContact } = useActions();
  const { adminka } = useDate();
  console.log(adminka)
  useEffect(()=>{
    getAdminkaDate({url:'contact'})
  },[])
  const dell = (e) => {
    dellContact(e)
    getAdminkaDate({url:'contact'})
  }
  console.log(adminka)
  if(adminka.data || adminka.data.length){
    return(
      <>
      <div className={s.top}>
        <div className={s.name}>Contacts</div>
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>DESCRIPTION</td>
            <td>NAVIGATION</td>
          </tr>
        </thead>
        <tbody>
          {adminka.data.map((e)=>{
            return(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.content}</td>
                <td>
                  <button onClick={()=>{dell({id:e.id})}}>Delete</button>
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

export default AContact