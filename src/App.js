import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
