import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'
import s from './AUsers.module.css'

const AUsers = () => {
  const { getAdminkaDate, getEditAdminkaPost } = useActions();
  const { adminka } = useDate();

  const targetGrup = (a, b) => {
    let user = adminka.data.find(e=>e.id === a);
    let data ={...user, grups:b}
    console.log(data)
    getEditAdminkaPost({
      url:'users',
      id:b,
      date:data,
    })
  }
  
  useEffect(()=>{
    getAdminkaDate({url:'users'})
  },[])
  console.log(adminka)
  if( adminka.data || adminka.data.length ){
    return(
      <>
      <div className={s.top}>
        <div className={s.name}>Users</div>
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>GROPS</td>
          </tr>
        </thead>
        <tbody>
          {adminka.data.map((e)=>{
            return(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  {e.grups == 2?
                    <button onClick={() => targetGrup(1, e.id)}>
                      Admin
                    </button>
                  :
                    <button onClick={() => targetGrup(2, e.id)}>
                      Users
                    </button>}
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

export default AUsers