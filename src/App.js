import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Routes 
  } from 'react-router-dom'
import GlobalStyle from "./globalStyles";
import Home from "./Home";
import Article from "./pages/articles/Article";
import Login from "./pages/Login/Login";

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/articles' element={<Article/>}/>
                <Route path="/auth" element={<Login/>}/>
            </Routes>
            
        </Router>
    )
}

export default App;