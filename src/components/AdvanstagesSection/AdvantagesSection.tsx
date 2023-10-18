import s from './AdvantagesSection.module.css'
import { FC, useEffect } from "react";
import Advantages from './Advantages/Advantages'
import { useActions } from '../../hook/useActions'
import { useDate } from '../../hook/useDate'

const AdvantagesSection: FC = () => {

  const { advantages } = useDate();
  const { getAdvantages } = useActions();

  useEffect(()=>{
      getAdvantages()
    },[])
    
  if(advantages.isLoading){return (<>Загрузка</>)}else{
  return (
    <>
      <div className={s.content}>
        {advantages.post.map(e => {return(<Advantages key={e.id} item = {e} />);})}
      </div>
    </>
  );}

}

export default AdvantagesSection;