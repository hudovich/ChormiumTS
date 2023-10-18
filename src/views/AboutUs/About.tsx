import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import s from './About.module.css';
import { FC, useEffect } from "react";
import { useActions } from "../../hook/useActions"
import { useDate } from "../../hook/useDate"

const About: FC = () => {
  
  const { getAbout } = useActions();
  const { about } = useDate();
  
  useEffect(()=>{
    getAbout();
  },[])

  if(about.isLoading){return (<>Загрузка</>)}else{
  return(
    <> 
      <Header />
        <div className={s.size}>
          <div className={s.nameBox}>About Us</div>
          {about.post.length?
            about.post.map( e =>{
              return(
                e.id%2?
                  <div key={e.id} className={s.boxTrue}>
                    <div className={s.content}>
                      <div className={s.nameBlock}>{e.name}</div>
                      <div className={s.description}>{e.description}</div>
                    </div>
                    <div className={s.images}>
                      <img src={e.images} alt={e.name} />
                    </div>
                  </div>
                :
                  <div key={e.id} className={s.boxFalse}>
                    <div className={s.images}>
                      <img src={e.images} alt={e.name} />
                    </div>
                    <div className={s.content}>
                      <div className={s.nameBlock}>{e.name}</div>
                      <div className={s.description}>{e.description}</div>
                    </div>
                  </div>
              );
            })
          : <p>information is absent</p>}
        </div>
      <Footer />
    </>
  );
}}

export default About;