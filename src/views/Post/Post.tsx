import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import s from './Post.module.css'
import { useParams } from 'react-router-dom';
import { FC, useEffect } from "react";
import { useDate } from "../../hook/useDate"
import { useActions } from "../../hook/useActions"

const Post: FC = () => {

  const { id } = useParams();
  const { blogPost } = useDate();
  const { getBlogPost } = useActions();

  useEffect(()=>{
    getBlogPost( id )
  },[])

  if(blogPost.isLoading){return (<>Загрузка</>)}else{
  return(
    <>
      <Header />
        <div className={s.size}>
          <div className={s.breadcrumbs}>
            <Breadcrumbs 
              item={[
                ['home', '/'], 
                ['blog','/blog/'],
                [blogPost.post.name, `/blog/${blogPost.post.id}/`]
              ]}
            />
          </div>
          <div className={s.box}>
          
            <div className={s.images}>
              {
                blogPost.post.images ?
                  <img src={blogPost.post.images} alt={blogPost.post.name} />
                : 
                  <p>No Photo</p>
              }
            </div>
          
            <div className={s.content}>
              <div className={s.name}>{blogPost.post.name}</div>
              <div className={s.author}>{blogPost.post.author}</div>
              <div className={s.description}>{blogPost.post.description}</div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );}
}

export default Post;