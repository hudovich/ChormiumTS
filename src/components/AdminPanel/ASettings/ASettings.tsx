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
        <form>
          <input value={adminka.data[0].name} />
          <input value={adminka.data[0].phone} />
          <input value={adminka.data[0].addres} />
          <input value={adminka.data[0].logo} />
          <input value={adminka.data[0].timeJob} />
          <input value={adminka.data[0].eMail} />
          <button>Edit</button>
        </form>
      </>
    )
  }else{null}
}

export default ASettings