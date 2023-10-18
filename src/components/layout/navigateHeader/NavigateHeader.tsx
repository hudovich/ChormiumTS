import { FC } from 'react';
import s from './NavigateHeader.module.css'
import NavigateButton from './components/NavigateButton/NavigateButton';
import CategoryList from './components/CategoryList/CategoryList';
import Phone from '../../phone/Phone';
import SearchValue from './components/Search/SearchValue';
import NavigateSlider from './components/NavigateSlider/NavigateSlider';

let NavigateHeader: FC = () => {
  return(
    <>
      <div className={s.size_top}>
        <div className={s.left}>
          <NavigateButton />
        </div>
        <div className={s.selector_right}>
        <div className={s.category_right_box}>
          <SearchValue />
          <Phone />
        </div>
      </div>
      </div>
      <div className={s.size}>
        <div className={s.left}>
          <CategoryList />
        </div>
        <div className={s.slider}>
          <NavigateSlider />
        </div>
      </div>
    </>
  );
}

export default NavigateHeader;