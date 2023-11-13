import * as getAbout from "../store/slice/about/about.action";
import * as getAdvantages from "../store/slice/advantages/advantages.action"
import * as getBlog from "../store/slice/blog/blog.action"
import * as getBlogPost from "../store/slice/blogPost/blogPost.action"
import * as getCategory from "../store/slice/category/category.action"
import * as getGallery from "../store/slice/gallery/gallery.action"
import * as getSliderHeader from "../store/slice/headerSlider/SliderHeader.action"
import * as getProduct from "../store/slice/products/products.action"
import * as sliderAPI from "../store/slice/slider/slider.action"
import * as addSearch from "../store/slice/search/search.slice"
import * as getSearchProduct from "../store/slice/search/search.action"
import * as wishSlice from "../store/slice/wishlist/wishlist.slice"
import * as wishApi from "../store/slice/wishlist/wishlist.action"
import * as postUser from "../store/slice/registration/regist.action"
import * as getLogin from "../store/slice/user/user.action"
import * as getAutorization from "../store/slice/user/user.action"
import * as exitUser from "../store/slice/user/user.slice"
import * as cartSlice from "../store/slice/cart/cart.slice"
import * as cartAPI from "../store/slice/cart/cart.action"
import * as OrderAPI from "../store/slice/orders/orders.action"
import * as targetSuccess from "../store/slice/registration/regist.slice"
import * as comment from "../store/slice/comment/comment.slice"
import * as apiComment from "../store/slice/comment/comment.action"
import * as apiContact from "../store/slice/contact/contact.action"

export const rootActions = {
  ...apiContact,
  ...comment,
  ...apiComment,
  ...OrderAPI,
  ...cartSlice.actions,
  ...cartAPI,
  ...sliderAPI,
  ...wishSlice.actions,
  ...wishApi,
  ...getAbout,
  ...getAdvantages,
  ...getBlog,
  ...getBlogPost,
  ...getCategory,
  ...getGallery,
  ...getSliderHeader,
  ...getProduct,
  ...addSearch.actions,
  ...getSearchProduct,
  ...postUser,
  ...targetSuccess.actions,
  ...getLogin,
  ...getAutorization,
  ...exitUser.actions,
}