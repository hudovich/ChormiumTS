import { useEffect, useState } from 'react';
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const startState = {
  name:'',
  phone:'',
  addres:'',
  logo:'',
  timeJob:'',
  eMail:'',
}

const ASettings = () => {
  const { getAdminkaDate, getEditAdminkaPost } = useActions(); 
  const { adminka } = useDate(); 
  const [data, setValue] = useState(startState)
  useEffect(()=>{(adminka.data || adminka.data.length)&&setValue(adminka.data[0])},[adminka])
  useEffect(()=>{
    getAdminkaDate({url:'settings'}) 
  },[])
  const sendSetting = (e) => { 
    e.preventDefault()
    getEditAdminkaPost({
      url:'settings',
      id: 1,
      date:data,
    })
  }
  if(adminka.data || adminka.data.length){
    return(
      <>
        <form>
          <input 
            value = {data.name}
            placeholder={adminka.data[0].name}
            onChange={(e)=>setValue((prev)=> ({...prev, name:e.target.value}))} 
          />
          <input 
            value = {data.phone}
            placeholder={adminka.data[0].phone}
            onChange={(e)=>{setValue(prev=> ({...prev, phone:e.target.value}))}} 
          />
          <input 
            value = {data.addres}
            placeholder={adminka.data[0].addres}
            onChange={(e)=>{setValue(prev=> ({...prev, addres:e.target.value}))}} 
          />
          <input 
            value = {data.logo}
            placeholder={adminka.data[0].logo}
            onChange={(e)=>{setValue(prev=> ({...prev, logo:e.target.value}))}} 
          />
          <input 
            value = {data.timeJob}
            placeholder={adminka.data[0].timeJob}
            onChange={(e)=>{setValue(prev=> ({...prev, timeJob:e.target.value}))}} 
          />
          <input 
            value = {data.eMail}
            placeholder={adminka.data[0].eMail}
            onChange={(e)=>{setValue(prev=> ({...prev, eMail:e.target.value}))}} 
          />
          <button onClick={(e)=>{sendSetting(e)}}>Edit</button>
        </form>
      </>
    )
  }else{null}
}

export default ASettings