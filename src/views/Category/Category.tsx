import s from './Category.module.css'
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import CartProduct from '../../components/CartProduct/CartProduct';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Nav from '../../components/Nav/Nav';
import { useParams } from 'react-router-dom';
import { useDate } from '../../hook/useDate'
import { useActions } from '../../hook/useActions'
import { FC, useEffect } from "react";

const Category: FC = () => {

  const { category } = useDate();
  const { getCategory } = useActions()
  const { idCat } = useParams()

  useEffect(()=>{
    getCategory(idCat);
  },[idCat])
  
  const [ cat ] = category.list.filter(e=>{
    if(e.id == idCat){
      return (e)
    }
  })

  if((category.isLoading) || (cat === undefined)){return (<>Загрузка</>)}else{
  return(
    <>
     <Header />
      <div className={s.size}>
        <div className={s.navigate}>
          <Breadcrumbs item={
            [
              ['Home', '/'], 
              [cat.name, `/${cat.id}`],
            ]
          }/>
        </div>
        <div className={s.box}>
          <div className={s.category}>
            <Nav cat={category}/>
          </div>
          <div className={s.product}>
            <div className={s.name}>{cat.name || null}</div>
            <div className={s.description}>{cat.description || null}</div>
            <div className={s.filter}>
              <div className={s.quantity}></div>
              <div className={s.boxFilter}></div>
            </div>
            <div className={s.boxProduct}>
              {category.productList.length?
                category.productList.map(e => {
                  return (<div className={s.itemProduct} key = {e.id}><CartProduct content={e}/></div>);
                })
              :<p>No products</p>}
            </div>
          </div>
        </div>
      </div>
     <Footer />
    </>
  );}
}

export default Category;