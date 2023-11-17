import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const AProducts = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  console.log(adminka)
  useEffect(()=>{
    getAdminkaDate({url:'product'})
  },[])
  console.log(adminka)

  return(
    <>
      Продукты
    </>
  )
}

export default AProducts