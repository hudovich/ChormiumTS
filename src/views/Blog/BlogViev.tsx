import { FC, useEffect } from "react";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import s from './BlogViev.module.css';
import Blog from '../../components/Blog/Blog';
import { useActions } from "../../hook/useActions"
import { useDate } from "../../hook/useDate"

const BlogViev: FC = () => {

  const { getBlog } = useActions();
  const { blog } = useDate();

  useEffect(()=>{
    getBlog();
  },[])

  return(
    <>
      <Header />
      <div className={s.size}>
        <div className={s.dreadcrumbs}>
          <Breadcrumbs item={[['Home','/'],['Blog','/blog/']]}/>
        </div>
        <div className={s.boxPost}>
          {blog.post.length?
            blog.post.map(e=>{
              return(<Blog key={e.id} item={e}/>);
            })
            :null
        }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogViev;