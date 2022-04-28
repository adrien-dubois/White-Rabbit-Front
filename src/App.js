import React from "react";
import { 
    BrowserRouter as Router, 
    Navigate, 
    Route, 
    Routes 
  } from 'react-router-dom'
import PostDetails from "./components/PostDetails/PostDetails.jsx";
import GlobalStyle from "./globalStyles";
import Home from "./Home";
import Article from "./pages/articles/Article";
import Login from "./pages/Login/Login";

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route 
                    path='/articles' 
                    element={<Navigate to="/posts" replace />}
                />
                <Route path="/posts" element={<Article/>} />
                <Route path="/posts/search" element={<Article/>} />
                <Route path="/posts/:id" element={<PostDetails/>} />
                {!user &&
                    <Route path="/auth" element={<Login/>}/>
                }
                {user &&
                    <Route 
                        path="/auth" 
                        element={<Navigate to="/" replace/>}
                    />
                }
            </Routes>
            
        </Router>
    )
}

export default App;