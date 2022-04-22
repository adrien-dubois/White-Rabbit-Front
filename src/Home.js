import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import { Button } from "./globalStyles";
import { Div } from "./styles";
import { Link } from 'react-router-dom';
import home from './assets/img/home.png'

const Home = () => {
  return (
    <Div>
        <Navbar/>
        <div className="row">
            <div className="home__bg">
                <img src={home} alt='Home'/>
            </div>
            <div className="col-6">
                <div className="txt-title">
                    <h1>Follow the White Rabbit...</h1>
                    <p>Un blog conçu pour des devs, alimenté par des devs, créé par des devs. <br/> <span> Rejoins le Club</span></p>
                    <Link to='/articles'>
                        <Button>
                            Entrer
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </Div>
  )
}

export default Home