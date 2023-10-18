import CommentForm from '../forms/Comment/CommentForm';
import { FC } from "react";
import s from './Comment.module.css'

const Comment: FC = ({item}) => {


  return(
    <>
      <div className={s.reviewsBoxName}>REVIEWS</div>
      {item.length?
        item.map( e => {
          return(
          <div key={e.id} className={s.postReviews}>
            <div className={s.photo}>
              {e.photo?
                <img src={e.photo} alt={e.name} />
              :<p>No photo</p>
              }
            </div>
            <div className={s.item}>
              <div className={s.author}>{e.autgor}</div>
              <div className={s.text}>{e.text}</div>
            </div> 
          </div>
          );
        })
        :<><p>There are no reviews yet.</p><div className={s.name}>BE THE FIRST TO REVIEW</div></>
      }
      <CommentForm />
    </>
  );
}

export default Comment