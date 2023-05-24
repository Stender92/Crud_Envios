import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'; 
import { DeliveryPage } from './pages/deliveryPage';
import { DeliveryFormPage } from './pages/deliveryFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation/>
          <Routes>
          <Route path='/' element={<Navigate to="/delivery"/>}></Route>
          <Route path="/delivery" element={<DeliveryPage/>}></Route>
          <Route path="/delivery-create" element={<DeliveryFormPage/>}></Route>
          <Route path="/delivery/:id" element={<DeliveryFormPage/>}></Route>      
        </Routes>
      <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App