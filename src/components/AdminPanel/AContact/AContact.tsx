import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const AContact = () =>{
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  console.log(adminka)
  useEffect(()=>{
    getAdminkaDate({url:'contact'})
  },[])
  console.log(adminka)
  return(
    <>
      Контакты
    </>
  )
}

export default AContact