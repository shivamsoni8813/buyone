import '@/styles/globals.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  let [cart, setCart] = useState({})
  let [total, SetTotal] = useState(0)
  useEffect(()=>{
    try {
      
      if (localStorage.getItem("cartData")) {
        setCart(JSON.parse(localStorage.getItem("cartData")))
      }
    } catch (error) {
      console.error(error);
    }
  
  },[])

  let saveData = (xcart)=>{
    localStorage.setItem("cartData", JSON.stringify(xcart))
    let subt= 0
    let len = Object.keys(xcart)
    for (let i = 0; i < len.length; i++) {
      subt += xcart[len[i]].price*xcart[len[i]].qty
    }
   console.log(subt);
    SetTotal(subt)
  }

  let addToCart = (itemCode,qty,price,name,size,variant)=>{
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }else{
      newCart[itemCode] = {qty : 1, price,name,size,variant }
    }
    setCart(newCart)
    saveData(newCart)
    
  }

  let clearCart = ()=>{
    setCart({})
    saveData({})
  }
  let removeCart = (itemCode,qty,price,name,size,variant)=>{
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode].qty<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveData(newCart)
  }
  return( 
  <>
    <Navbar cart = {cart} setCart={setCart} addToCart={addToCart} clearCart={clearCart} removeCart={removeCart}  total={total} SetTotal={SetTotal}/>
    <Component {...pageProps} cart = {cart} setCart={setCart} addToCart={addToCart} clearCart={clearCart} removeCart={removeCart} total={total} SetTotal={SetTotal}/>
    <Footer cart = {cart} setCart={setCart} addToCart={addToCart} clearCart={clearCart} removeCart={removeCart} total={total} SetTotal={SetTotal}/>
  </>
  )
}
