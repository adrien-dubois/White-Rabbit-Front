import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Routes 
  } from 'react-router-dom'
import GlobalStyle from "./globalStyles";
import Home from "./Home";
import Article from "./pages/articles/Article";

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/articles' element={<Article/>}/>
            </Routes>
            
        </Router>
    )
}

export default App;