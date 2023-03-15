import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Axios from 'axios'
import Header from './component/Header'
import Footer from './component/Footer'
import ProductDt from './page/product/ProductDt'
import VrList from './page/productList/VrList'
// import Navbar from './component/Navbar'

function App() {
  const addstudioa = () => {
    // eslint-disable-next-line no-unused-expressions
    Axios.post('http://localhost:3001/create', {
      vr_number: vr_number,
      vr_name: vr_name,
      vr_size: vr_size,
      vr_ltd: vr_ltd,
      vr_date: vr_date,
      vr_type: vr_type,
      vr_description: vr_description,
      vr_tracks: vr_tracks,
      vr_price: vr_price,
      vr_quantity: vr_quantity,
      vr_img: vr_img,
    }).then
    then(() => {
      console.log('success')
    })

    // 將抓取到的直送入表
  }

  return (
    <>
      <Router>
        <Header />
        <button onClick={addstudioa}>ADD</button>

        <Routes>
          <Route path="/VrList" element={<VrList />} />
          <Route path="/ProductDt" element={<ProductDt />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
