import s from './ContactForm.module.css'
import { useState } from 'react'

const staetState = {
  name:'',
  email:'',
  content:'',
}

const ContactForm = () => {

  const [date, setForm] = useState(staetState);

  const sendData = () => {
    console.log(date);
  }

  return(
    <>
      <div className={s.form}>
        <div className={s.nameForm}>Drop us a line:</div>
        <div className={s.dateUser}>
          <div className={s.input}>
            Your Name
            <input
              type="text"
              onChange={(e)=>{setForm(prev =>({...prev, name:e.target.value}))}}
            />
          </div>
          <div className={s.input}>
            Your Email *
            <input
              type="text"
              onChange={(e)=>{setForm(prev =>({...prev, email:e.target.value}))}} 
            />
          </div>
        </div>
        Your Message
        <textarea 
          onChange={(e)=>{setForm(prev =>({...prev, content:e.target.value}))}}
        />
        <div 
          onClick={()=>{sendData()}}
          className={s.button}
        >
          Send
        </div>
      </div>
    </>
  )
}

export default ContactForm