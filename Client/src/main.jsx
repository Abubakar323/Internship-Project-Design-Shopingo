import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import BlogRead from './Component/BlogRead/BlogRead.jsx'
import BlogPost from './Component/BlogPost/BlogPost.jsx'
import Dashboard from './Component/Dashboard/Dashboard.jsx'
import EditProfile from './Component/EditProfile/EditProfile.jsx'
import ProfileDetail from './Component/MYProfile/ProfileDetail.jsx'
import SavedAddress from './Component/Address/SaveAddress.jsx'
import Registration from './Component/Account/Registration.jsx'
import Login from './Component/Account/Login.jsx'
import ForgotPassword from './Component/Account/ForgotPassword.jsx'
import BillingDetail from './Component/SHOP/BillingDetail.jsx'
import PaymentMethod from './Component/SHOP/PaymentMethod.jsx'
import ShopCart from './Component/ShopCart/ShopCart.jsx'
import Wishlist from './Component/Wishlist/Wishlist.jsx'
import Cart from './Cart.jsx'
import ProductDetail from './Component/ProductDetail/ProductDetail.jsx'
import ShopGrid from './ShopGrid/ShopGrid.jsx'
import ApiProducts from './Component/Product.jsx'
import Product from './Component/Product.jsx'




const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>  
    <Route path='/contact' element={<Contact/>}/>  
    <Route path='/blogread' element={<BlogRead/>}/>  
    <Route path='/blogpost' element={<BlogPost/>}/>  
    <Route path='/dashboard' element={<Dashboard/>}/>  
    <Route path='/editProfile' element={<EditProfile/>}/>  
    <Route path='/profileDetail' element={<ProfileDetail/>}/>  
    <Route path='/saveAddress' element={<SavedAddress/>}/>  
    <Route path='/registration' element={<Registration/>}/>  
    <Route path='/login' element={<Login/>}/>  
    <Route path='/forgotpassword' element={<ForgotPassword/>}/>  
    <Route path='/billingDetail' element={<BillingDetail/>}/>  
    <Route path='/shotcart' element={<ShopCart/>}/>  
    <Route path='/wishlist' element={<Wishlist/>}/>  
    <Route path='/paymentMethod' element={<PaymentMethod/>}/>  
// PaymentMethod
 
<Route path='/product' element={<Product/>}/>  

    <Route path='/cart' element={<Cart/>}/>  
    <Route path='/productDetail' element={<ProductDetail/>}/>  
    <Route path='/shopgrid' element={<ShopGrid/>}/>  
  </Route>
  ))
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
  </React.StrictMode>,
)
