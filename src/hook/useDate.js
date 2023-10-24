import { useSelector } from "react-redux"

export const useDate = () => {
  const advantages = useSelector(state=>state.advantages);
  const about = useSelector(state => state.about);
  const blog = useSelector(state => state.blog);
  const blogPost = useSelector(state => state.blogPost);
  const cart = useSelector(state => state.cart);
  const category = useSelector(state => state.category);
  const gallery = useSelector(state => state.gallery);
  const pages = useSelector(state => state.pages);
  const products = useSelector(state => state.products);
  const slider = useSelector(state => state.slider);
  const sliderHeader = useSelector(state => state.sliderHeader);
  const search = useSelector(state => state.search);
  const user = useSelector(state=> state.user);
  const wishlist = useSelector(state=> state.wishlist)
  const register = useSelector(state=>state.register)
  return {advantages, about, blog, cart, category, gallery, pages, products, slider, sliderHeader, blogPost, search, user, wishlist, register}
}