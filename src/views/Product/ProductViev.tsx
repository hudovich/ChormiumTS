import s from './ProductViev.module.css'
import { useParams } from 'react-router-dom';
import { FC, useEffect } from "react";
import { useActions } from "../../hook/useActions"
import { useDate } from "../../hook/useDate"
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import Product from '../../components/Product/Product';
import Comment from '../../components/Comment/Comment';

const ProductViev: FC = () =>{
  const { idProduct } = useParams();
  const { products, category } = useDate()
  const { getCategory, getProduct } = useActions()

  useEffect(()=>{
    getProduct(idProduct);
    if (products.post !== null){
      getCategory(products.post.category[0]);
    }
  },[idProduct])

  if((products.isLoading) || (products.post === null)){return (<>Загрузка</>)}else{

  const cat = category.list.find(e=>e.id==products.post.category[0]);
 
  
  return(
    <>
      <Header />
        <div className={s.size}>
          <div className={s.box}>
            <Breadcrumbs item={
              [
                ['HOME', '/'], 
                cat != undefined?[cat.name,`/${cat.id}/`]:undefined,
                [products.post.name, `/${products.post.category[0]}/${products.post.id}/`]
              ]
            } 
            />
            <div className={s.infoProduct}>
              <Product item={products.post}/>
            </div>
            <div className={s.reviews}>
             <Comment item={products.post.reviews}/>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );}
}

export default ProductViev;