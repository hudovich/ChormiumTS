import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import s from './SearchViev.module.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Nav from '../../components/Nav/Nav';
import { useEffect } from 'react';
import { useDate } from '../../hook/useDate'
import { useActions } from '../../hook/useActions'
import { FC } from "react";
import {useParams } from 'react-router-dom';
import CartProduct from '../../components/CartProduct/CartProduct';

const SearchViev: FC = () =>{

  const { category, search } = useDate();
  const { getCategory, getSearchProduct } = useActions();
  const { getValue } = useParams();


  useEffect(()=>{
    getSearchProduct(getValue);
    getCategory()
  },[])

  return(
    <>
      <Header /> 
        <div className={s.size}>
          <div className={s.navigate}>
            <Breadcrumbs 
              item={[
                  ['Home', '/'],
                  ['Search', '/search']
                ]
              } 
            />
          </div>
          <div className={s.box}>
            <div className={s.category}><Nav cat={category}/></div>
            <div className={s.boxSearch}>
              <div className={s.text}>Search results: "{getValue}"</div>
              <div className={s.res}>
                <div className={s.resBox}>
                  {search.result.length ?
                    search.result.map((e)=>{
                      return(<div key={e.id} className={s.item}><CartProduct content={e} /></div>)
                    })
                  :
                    <div className={s.res}>No products were found matching your selection.</div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default SearchViev;