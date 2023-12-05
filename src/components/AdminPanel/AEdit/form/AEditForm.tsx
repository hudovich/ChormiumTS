import { useState } from "react";
import { useActions } from '../../../../hook/useActions'

const AEditForm = (props) => {
  let r = Object.prototype.toString
  const [data, setData] = useState(props);
  const { getAdminkaDate, getEditAdminkaPost, createPostAdminka } = useActions()
  const editData = (e)=> {
    e.preventDefault()
    if(props.id){
      getEditAdminkaPost(
        {
          url:props.get,
          id:props.id,
          date:JSON.parse(JSON.stringify(data))
        }
      )
      getAdminkaDate({url:props.get})
     }else{
       console.log('Новая запись')
       createPostAdminka(
        {
          url:props.get,
          date:JSON.parse(JSON.stringify(data))
        }
       );
       getAdminkaDate({url:props.get})
     }
  }
  return(
    <form>
      <input value={data.name} 
             placeholder="name" 
             onChange={e=>setData( prev =>({...prev, name:e.target.value}))}
      />
      <input 
        value={data.description} 
        placeholder="description"
        onChange={e=>setData( prev =>({...prev, description:e.target.value}))} 
      />
      {data.sub!==undefined && 
        <input value={data.sub} 
               placeholder="Sub Description" 
               onChange={e=>setData(prev =>({...prev, sub:e.target.value}))}
        />
      }
      {(r.call(data.images) == '[object Array]') ? 
        data.images.map(e=>{
          return(
           <input 
            key={e.id} 
            value={e.url} 
            onChange={b=>setData( prev =>({
                ...prev, 
                images: prev.images.map(image=>
                  image.id === e.id ? {...image, url:b.target.value} : image
                )
            }))}
          />
          )
        })
      : null 
      }
      {(r.call(data.images) == '[object String]') && (data.images !== '') && 
        <input value={data.images} onChange={e=>setData( prev =>({...prev, images:e.target.value}))}/>}
      {(r.call(data.images) == '[object String]') && (data.images == '')&&
        <input 
          placeholder="url images" 
          value={data.images} 
          onChange={e=>setData( prev =>({...prev, images:e.target.value}))}
        />
      }
      {(r.call(data.images) == '[object Array]') &&
        <button
          onClick={(e)=>{
            e.preventDefault()
            setData(
              prev=>{
               return{ ...prev,
                  images: [...prev.images, {id:data.images.length, url:'url img'}]
              }
              }
            )
          }}
          >
        add Img
        </button>
      }
      {data.price!==undefined && 
        <input 
          value={data.price} 
          placeholder="price"
          onChange={e=>setData( prev =>({...prev, price:e.target.value}))}
        />}
      {data.promotion!==undefined && 
        <input 
          value={data.promotion} 
          placeholder="promotion" 
          onChange={e=>setData( prev =>({...prev, promotion:e.target.value}))}
        />}
      {data.category!==undefined && 
        <input 
          value={data.category} 
          placeholder="category" 
          onChange={e=>setData( prev =>({...prev, category:e.target.value}))}
        />}
    
      <button onClick={editData}>Save</button>
      <button>Delete</button>
    </form>
  )
}

export default AEditForm