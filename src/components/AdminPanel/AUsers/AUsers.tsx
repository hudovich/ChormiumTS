import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const AUsers = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  console.log(adminka)
  useEffect(()=>{
    getAdminkaDate({url:'users'})
  },[])
  console.log(adminka)

  return(
    <>
      Пользыватели
    </>
  )
}

export default AUsers