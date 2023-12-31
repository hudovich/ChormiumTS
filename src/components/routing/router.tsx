import {createBrowserRouter} from 'react-router-dom'
import Home from '../../views/Home'
import Login from '../forms/Login/Login';
import Registration from '../forms/Registration/Registration';
import Category from '../../views/Category/Category';
import Product from '../../views/Product/ProductViev';
import SearchViev from '../../views/Search/SearchViev';
import BlogViev from '../../views/Blog/BlogViev';
import Post from '../../views/Post/Post';
import About from '../../views/AboutUs/About';
import Gallery from '../../views/Gallery/Gallery';
import Contact from '../../views/Contact/Contact';
import CatrViev from '../../views/Cart/CartViev';
import Account from '../../views/Account/Account';
import Orders from '../Account/Orders/Orders';
import AccoutnEdit from '../Account/AccountEdit/AccountEdit';
import AccountAddress from '../Account/AccountAddress/AccontAddress';
import Wishlist from '../../views/Wishlist/Wishlidt';
import Buy from '../../views/Buy/Buy';
import AdminPanel from '../../views/AdminPanel/AdminPanel';
import AOrders from '../AdminPanel/AOrders/AOrders'
import AContact from '../AdminPanel/AContact/AContact'
import ABlog from '../AdminPanel/ABlog/ABlog'
import AAbout from '../AdminPanel/AAbout/AAbout'
import ASlider from '../AdminPanel/ASlider/ASlider'
import AProducts from '../AdminPanel/AProducts/AProducts'
import ACategory from '../AdminPanel/ACategory/ACategory'
import AUsers from '../AdminPanel/AUsers/AUsers'
import ASettings from '../AdminPanel/ASettings/ASettings'
import Edit from '../AdminPanel/AEdit/Edit';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children:[
      {
        path: '/login',
        element:<Login />
      }, 
      {
        path: '/registr',
        element:<Registration />
      },    
    ]
  },
  {
    path:'/account',
    element: <Account />,
    children:[
      {
        path:'/account/orders',
        element: <Orders />
      },
      {
        path:'/account',
        element: <Orders />
      },
      {
        path:'/account/edit-account',
        element: <AccoutnEdit />
      },
      {
        path:'/account/addresses',
        element: <AccountAddress />
      },
    ]
  },
  {
    path:'/wishlist',
    element: <Wishlist />
  },
  {
    path:'/buy',
    element: <Buy />
  },
  {
    path:'/cart',
    element: <CatrViev />
  },
  {
    path:':idCat',
    element: <Category />
  },
  {
    path:':idCat/:idProduct',
    element: <Product />
  },
  {
    path:'/search/:getValue',
    element: <SearchViev />
  },
  {
    path:'/blog',
    element: <BlogViev />
  },
  {
    path:'/blog/:id/',
    element: <Post />
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'/gallery',
    element: <Gallery />
  },
  {
    path:'/contact',
    element: <Contact />
  },
  {
    path: '/adminpanel',
    element:<AdminPanel />,
    children:[
      {
        path: 'aorders',
        element:<AOrders />,
      },
      {
        path: 'ablog',
        element:<ABlog />,
      },
      {
        path: 'ablog/:id',
        element:<Edit get='blog'/>
      },
      {
        path: 'aabout',
        element:<AAbout />,
      },
      {
        path: 'aabout/:id',
        element:<Edit get='about'/>
      },
      {
        path: 'aslider',
        element:<ASlider />,
      },
      {
        path: 'aslider/:id',
        element:<Edit get='slider'/>
      },
      {
        path: 'aproducts',
        element:<AProducts />,
      },
      {
        path: 'aproducts/:id',
        element:<Edit get='product'/>
      },
      {
        path: 'acategory',
        element:<ACategory />,
      },
      {
        path: 'acategory/:id',
        element:<Edit get='category'/>
      },
      {
        path: 'ausers',
        element:<AUsers />,
      },
      {
        path: 'asettings',
        element:<ASettings />,
      },
      {
        path: 'acontact',
        element:<AContact />,
      },
    ]
  }
]);


export default router;