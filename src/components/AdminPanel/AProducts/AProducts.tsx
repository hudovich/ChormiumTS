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
  if(adminka.data || adminka.data.length){
    return(
      <>
        Продукты
      </>
    )
  }else{null}
}

export default AProducts