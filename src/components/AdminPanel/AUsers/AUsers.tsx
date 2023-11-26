import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'
import s from './AUsers.module.css'

const AUsers = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  console.log(adminka)
  useEffect(()=>{
    getAdminkaDate({url:'users'})
  },[])
  console.log(adminka)
  if( adminka.data || adminka.data.length ){
    return(
      <>
      <div className={s.top}>
        <div className={s.name}>Blog</div>
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>GROPS</td>
            <td>EDIT</td>
          </tr>
        </thead>
        <tbody>
          {adminka.data.map((e)=>{
            return(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.grups == 2?'Admin':'Users'}</td>
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

export default AUsers