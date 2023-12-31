import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useActions } from "../../../hook/useActions"
import { useDate } from "../../../hook/useDate"
import { blog, product, about, slider, category } from "./Object/object.js"
import AEditForm from "./form/AEditForm"

const Edit = ({get}) =>{
  const { id }  = useParams();
  const { adminka } = useDate()
  const { getAdminkaDate } = useActions();
  useEffect(()=>{
    if (!(id == "add")){
      getAdminkaDate({url:get})
    }
  },[])

  let post = ''

  if (adminka.data || (id == "add")){
    if(id == "add"){
      switch(get){
        case'blog':
          post = blog 
          break;
        case'product':
          post = product
          break;
        case'about':
          post = about
          break;
        case'slider':
          post = slider
          break;
        case'category':
          post = category
          break;
        default:
          break;
      }
    }else{ 
      adminka.data.length > 0 ?
        post = adminka.data.find(e=>e.id==id)
      : 
        post = adminka.data
    }
    return(
      <>
        <AEditForm 
          get = {get}
          id={post.id}
          name={post.name}
          description={post.description}
          sub={post.sub}
          images={post.images}
          price={post.price}
          promotion={post.promotion}
          category={post.category}
        />
      </>
    )
  } else {return(<>Загрузка</>)}
}

export default Edit