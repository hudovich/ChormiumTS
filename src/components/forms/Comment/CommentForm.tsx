import s from './CommentForm.module.css'
import { useState, FC } from 'react'

const stateState = {
  comment:'',
  name:'',
  email:'',
}

const CommentForm: FC = () => {

const [data, setComment] = useState(stateState);
const sendComment = () => {
  console.log(data);
  setComment(stateState);
}
return (
  <>
    <div className={s.addReview}>ADD A REVIEW</div>
      <div className={s.form}>
        <div className={s.formInput}>
          Your review
          <input 
            type="text" 
            placeholder='Your review'
            value={data.comment}
            onChange={(e)=>setComment((prev)=>({...prev, comment:e.target.value}))} 
          />
        </div>
        <div className={s.formInput}>
          name
          <input 
            type="text" 
            placeholder='name'
            value={data.name}
            onChange={(e)=>setComment((prev)=>({...prev, name:e.target.value}))}  
          />
        </div>
        <div className={s.formInput}>
          E-mail
          <input 
            type="text" 
            placeholder='E-mail'
            value={data.email}
            onChange={(e)=>setComment((prev)=>({...prev, email:e.target.value}))}  
          />
        </div>
      </div>
    <div className={s.button} onClick={()=>sendComment()}>submit</div>
  </>
  )
};

export default CommentForm