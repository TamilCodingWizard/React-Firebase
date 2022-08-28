import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import Createpost from "./screens/createpost/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";
import Editpost from "./screens/editpost/Editpost";
import Themeswitch from "./components/switch/Themeswitch";
import './App.css'
import { useThemeContext } from './hooks/useThemeContext';
import Login from './screens/login/Login';
import Signup from './screens/singup/Signup';

function App() {


  const {theme} = useThemeContext()

  return (
    <div className={`App ${theme}bg`}>
      <BrowserRouter>
        <Navbar />
        <Themeswitch/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Createpost />} />
            <Route path="/post/:id" element={<Postdetail />} />
            <Route path="/edit/:id" element={<Editpost/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
