import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'


const AOrders = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  useEffect(()=>{
    getAdminkaDate({url:'orders'})
  },[])
  console.log(adminka)
  return(
    <>
      Ордеры
    </>
  )
}

export default AOrders