import './App.css';
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Navbar from './component/Navbar';
import Viewdetails from './pages/Viewdetails';
import { useState } from 'react';

function App() {
  const [cartArr, setcartArr] = useState([]);
  console.log(cartArr)
  function cart (ans){
    console.log(ans)
    let yourobj={
      ...ans,
      quantity:1
    }
    console.log(yourobj)
    
    // setcartArr([...cartArr,yourobj])

//use for don't  show the same exists product 
    let find = cartArr.find((x)=>x.id===ans.id)
    if(!find){
      setcartArr([...cartArr,yourobj])
    }
    else{
      alert("allready exist")
    }

  }
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar cartArr={cartArr}/>
      <Routes>
      <Route path="/" element={<Homepage cart={cart}/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/cart" element={<Cart cart={cartArr} setcartArr={setcartArr}/>} />
      <Route path="/viewdetails" element={<Viewdetails cart={cart}/>} />

        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
