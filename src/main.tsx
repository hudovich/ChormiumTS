import React from 'react'
import './global.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './components/routing/router'
import { Provider } from 'react-redux'
import Store from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={routers}/>
    </Provider>,
  // </React.StrictMode>,
)
