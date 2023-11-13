import { useParams } from 'react-router-dom';
import s from './CommentForm.module.css'
import { useState, FC } from 'react'
import { useActions } from '../../../hook/useActions'

const CommentForm: FC = () => {
const { idProduct } = useParams();
const { createComment } = useActions();
const stateState = {
  content:'',
  name:'',
  email:'',
  productId:idProduct,
}
const [data, setComment] = useState(stateState);
const sendComment = (e) => {
  e.preventDefault()
  createComment(data);
  setComment(stateState);
}
return (
  <>
    <div className={s.addReview}>ADD A REVIEW</div>
      <form className={s.form}>
        <div className={s.formInput}>
          Your review
          <input 
            type="text" 
            placeholder='Your review'
            value={data.content}
            onChange={(e)=>setComment((prev)=>({...prev, content:e.target.value}))} 
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
        <button className={s.button} onClick={(e)=>sendComment(e)}>submit</button>
      </form>
  </>
  )
};

export default CommentForm