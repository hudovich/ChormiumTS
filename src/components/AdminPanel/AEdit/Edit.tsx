import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useActions } from "../../../hook/useActions"
import { useDate } from "../../../hook/useDate"
import { blog, product } from "./Object/object.js"
import AEditForm from "./form/AEditForm"

const Edit = ({get}) =>{
  const { id }  = useParams();
  const { adminka } = useDate()
  const { getAdminkaDate, getEditAdminkaPost } = useActions();
  console.log(get);
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
        default:
          break;
      }
    }else{ 
      post = adminka.data.find(e=>e.id==id);
    }
    return(
      <>
        <AEditForm 
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