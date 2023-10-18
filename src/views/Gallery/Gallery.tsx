import s from './Gallery.module.css'
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import { useDate } from "../../hook/useDate"
import { useActions } from "../../hook/useActions"
import { FC, useEffect } from "react";

const Gallery: FC = () =>{

  const { gallery } = useDate();
  const { getGallery } = useActions();

  useEffect(()=>{
    getGallery()
  },[])

  if(gallery.isLoading){return (<>Загрузка</>)}else{
  return(
    <>
      <Header />
        <div className={s.size}>
          <div className={s.nameBox}>
            Gallery
          </div>
          <div className={s.box}>
            {gallery.post.length?
              gallery.post.map(e=>{
                return(
                  <div key={e.id} className={s.images}>
                    <img src={e.images} alt={e.id} />
                  </div>
                )
              })
            : <p>Photo not</p>
            }
          </div>
        </div>
      <Footer />
    </>
  );
  }
}

export default Gallery;