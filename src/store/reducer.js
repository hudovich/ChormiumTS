import { combineReducers } from "@reduxjs/toolkit";
import { reducer as advantagesSlice } from "./slice/advantages/advantages.slice";
import { reducer as sliderHeader } from "./slice/headerSlider/SliderHeader.slice";
import { reducer as Slider } from "./slice/slider/slider.slice";
import { reducer as Products } from "./slice/products/products.slice";
import { reducer as Gallery } from "./slice/gallery/gallery.slice";
import { About } from "./slice/about/about.slice";
import { reducer as Blog } from "./slice/blog/blog.slice";
import { reducer as BlogPost } from "./slice/blogPost/blogPost.slice";
import { reducer as Pages } from "./slice/pages/pages.slice";
import { reducer as Category} from './slice/category/category.slice'
import { reducer as CartSlice } from "./slice/cart/cart.slice";
import { reducer as search } from "./slice/search/search.slice";
import { reducer as user } from "./slice/user/user.slice";
import { reducer as wishlist } from "./slice/wishlist/wishlist.slice"
import { reducer as Register } from "./slice/registration/regist.slice"
import { reducer as Orders } from "./slice/orders/orders.slice";


export const reducers = combineReducers({
  user: user,
  advantages: advantagesSlice,
  sliderHeader: sliderHeader,
  slider: Slider,
  products: Products,
  gallery: Gallery,
  about: About.reducer,
  orders: Orders,
  blog: Blog,
  pages: Pages,
  category: Category,
  cart: CartSlice,
  blogPost: BlogPost,
  search: search,
  wishlist: wishlist,
  register: Register,
})
