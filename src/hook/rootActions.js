import * as getAbout from "../store/slice/about/about.action";
import * as getAdvantages from "../store/slice/advantages/advantages.action"
import * as getBlog from "../store/slice/blog/blog.action"
import * as getBlogPost from "../store/slice/blogPost/blogPost.action"
import * as getCategory from "../store/slice/category/category.action"
import * as getGallery from "../store/slice/gallery/gallery.action"
import * as getSliderHeader from "../store/slice/headerSlider/SliderHeader.action"
import * as getProduct from "../store/slice/products/products.action"
import * as getSlider from "../store/slice/slider/slider.action"
import * as getPostSlider from "../store/slice/slider/slider.action"
import * as addProductCart from "../store/slice/cart/cart.slice"
import * as delProductCart from "../store/slice/cart/cart.slice"
import * as delAllProductCart from "../store/slice/cart/cart.slice"
import * as getlocalCart from "../store/slice/cart/cart.slice"
import * as addSearch from "../store/slice/search/search.slice"
import * as getSearchProduct from "../store/slice/search/search.action"
import * as addWish from "../store/slice/wishlist/wishlist.slice"
import * as getLocal from "../store/slice/wishlist/wishlist.slice"
import * as delAllWish from "../store/slice/wishlist/wishlist.slice"
import * as delWish from "../store/slice/wishlist/wishlist.slice"
import * as postUser from "../store/slice/registration/regist.action"

export const rootActions = {
  ...getAbout,
  ...getAdvantages,
  ...getBlog,
  ...getBlogPost,
  ...getCategory,
  ...getGallery,
  ...getSliderHeader,
  ...getProduct,
  ...getSlider,
  ...getPostSlider,
  ...addProductCart.actions,
  ...delProductCart.actions,
  ...delAllProductCart.actions,
  ...getlocalCart.actions,
  ...addSearch.actions,
  ...getSearchProduct,
  ...addWish.actions,
  ...getLocal.actions,
  ...delAllWish.actions,
  ...delWish.actions,
  ...postUser,
}