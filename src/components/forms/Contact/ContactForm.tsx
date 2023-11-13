import s from './ContactForm.module.css'
import { useEffect, useState } from 'react'
import { useActions } from '../../../hook/useActions'
import { useDate } from '../../../hook/useDate'

const staetState = {
  name:'',
  email:'',
  content:'',
}

const ContactForm = () => {
  const { createContact } = useActions()
  const { contact } = useDate();
  const [date, setForm] = useState(staetState);
  const sendData = (e) => {
    e.preventDefault()
    createContact(date);
    setForm(staetState);
  }

  return(
    <>
      {contact.fulfilled? <div className={s.ok}>Sending was successful</div> :
        <form className={s.form}>
          <div className={s.nameForm}>Drop us a line:</div>
          <div className={s.dateUser}>
            <div className={s.input}>
              Your Name
              <input
                type="text"
                value={date.name}
                onChange={(e)=>{setForm(prev =>({...prev, name:e.target.value}))}}
              />
            </div>
            <div className={s.input}>
              Your Email *
              <input
                type="text"
                value={date.email}
                onChange={(e)=>{setForm(prev =>({...prev, email:e.target.value}))}} 
              />
            </div>
          </div>
          Your Message
          <textarea 
            value={date.content}
            onChange={(e)=>{setForm(prev =>({...prev, content:e.target.value}))}}
          />
          <button 
            onClick={(e)=>{sendData(e)}}
            className={s.button}
          >
            Send
          </button>
        </form>
      }
    </>
  )
}

export default ContactForm