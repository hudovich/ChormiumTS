import { FC, useState } from 'react';
import s from './SearchValue.module.css'

const SearchValue:FC = () => {
  const [value, setValue] = useState<string>('');
  return(
      <form className={s.search} action={`/search/${value}`}>
          <input 
            className={s.input} 
            placeholder='Search by Title, Brand, Category...' 
            onChange={(e)=>setValue(e.target.value)}
            required
          />
          <button className={s.button}>SEARCH</button>
      </form>
  );
}

export default SearchValue;