import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Order from './component/Order';
import View from './component/View';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/user" element={<Order></Order>}></Route>
        <Route path="/user/:id" element={<View></View>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
