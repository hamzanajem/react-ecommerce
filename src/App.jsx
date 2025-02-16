import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import InfoSection from "./components/InfoSection"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import OrderConfirmation from "./pages/OrderConfirmation"
import FilterData from "./pages/FilterData"
import ProductDetail from "./pages/ProductDetail"
import Category from "./pages/Category"



function App() {
  const [order, setOrder] = useState(null);

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation order={order} />} />
        <Route path="/filtred-products" element={<FilterData />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products/:category" element={<Category />} />

      </Routes>

      <Footer />
    </BrowserRouter>


  )
}

export default App
