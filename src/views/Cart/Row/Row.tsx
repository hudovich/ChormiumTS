import { useDispatch } from 'react-redux'
import s from './Row.module.css'
import { actions } from '../../../store/slice/cart/cart.slice'

const Row = ({data}) => {
  console.log(data);
  const dispatch = useDispatch();

  return(
    <tr className={s.row}>
      <th className={s.images}>
        {data.product.images.length?
          <img 
            src={data.product.images[0].url}
            alt={data.product.name}
          /> 
        : 
          <p>No photo</p>
        }
      </th>
      <th className={s.name}>{data.product.name||null}</th>
      <th className={s.price}>{data.product.price||null} $</th>
      <th>
        <div className={s.count}>
          <div 
            className={s.button}
            onClick={()=>dispatch(actions.question({id:data.product.id, boolean:false}))}
          >
            -
          </div>
            {data.quantity||0}
          <div 
            className={s.button}
            onClick={()=>dispatch(actions.question({id:data.product.id, boolean:true}))}
          >
            +
          </div>
        </div>
      </th>
      <th>{data.subtotal||0} $</th>
      <th>
        <span 
          className={s.x}
          onClick={()=>dispatch(actions.delProductCart(data.id))}
        >
            x
        </span>
      </th>
    </tr>
  )
}

export default Row