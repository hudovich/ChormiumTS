import { useEffect } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const ASettings = () => {
  const { getAdminkaDate } = useActions();
  const { adminka } = useDate();
  console.log(adminka)
  useEffect(()=>{
    getAdminkaDate({url:'settings'})
  },[])
  if(adminka.data || adminka.data.length){
    return(
      <>
        Настройки
      </>
    )
  }else{null}
}

export default ASettings