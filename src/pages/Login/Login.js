import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';

/*----- IMPORT STYLED COMPONENTS -----*/
import Navbar from '../../components/Navbar/Navbar'
import { Div } from './Login.elements'
import Input from '../../components/Input/Input'
import InputPassword from '../../components/Input/InputPassword'
import auth from '../../assets/img/auth.png'

/*----- IMPORT ICONS -----*/
import { FaEnvelope, FaUser, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { IconContext } from 'react-icons'

/*----- IMPORT HOOKS -----*/
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialState = { name: '', email: '', password: '', confirmPassword: '' };

const Login = () => {

  /*----- HOOKS STATES -----*/
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*----- SWITCH FORM STATE -----*/
  const [isSignUp, setIsSignUp] = useState(false);
  const switchForm = () => setIsSignUp(!isSignUp);

  /*----- FORM FIELDS STATE -----*/
  const [formData, setFormData] = useState(initialState);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  }

  // This handler will target the right input to the right valu in the initial state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  /*----- GOOGLE AUTH PART -----*/
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({
        type: 'AUTH',
        data: { result, token }
      });

      // Once authenticated, navigate to home directly
      navigate('/');

    } catch (error) {
      console.log(error);
    }
  }
  const googleFailure = (error) => {
    console.log(error);
    console.log("La connexion à Google n'a pas fonctionné. Essayez à nouveau plus tard");
  }

  /*----- DOM RENDER -----*/
  return (
    <Div>
        <Navbar/>
        <div className="forms-container">
          <div className="signin-signup">

            <div className="image">
              <img src={auth} alt='Authentication Guy' />
            </div>

            <div className="auth-form">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <IconContext.Provider value={{ color: "#FFF", size: "4rem" }}>
                <div className="title">
                  {isSignUp ? <FaUserPlus/> : <FaUserCircle/> } <br/>
                  {isSignUp ? "S'enregistrer" : "Se connecter"}
                </div>
                </IconContext.Provider>

                {isSignUp && (
                  <>
                    <Input 
                      icon={<FaUser/>}
                      type="text"
                      placeholder="Pseudo"
                      name="name"
                      handleChange={handleChange}
                    />
                  </>
                )}
                <Input
                  icon={<FaEnvelope/>}
                  type="email"
                  placeholder="E-Mail"
                  name="email"
                  handleChange={handleChange}
                />

                <InputPassword
                  name="password"
                  handleChange={handleChange}
                  placeholder="Mot de passe"
                />

                {isSignUp && <InputPassword 
                  name="confirmPassword" 
                  placeholder="Confirmation mot de passe" 
                  handleChange={handleChange}
                />}

                <button type="submit" className='btn'>
                  {isSignUp ? "Inscription" : "Connexion"}
                </button>

              </form>

              <form className='switch-form'>
                <div>
                  <input 
                    type="checkbox"
                    name='profile'
                    id='profil'
                    className='switch'
                    onChange={switchForm}
                  />
                  <label htmlFor="profil">
                    {isSignUp ? "Déjà inscrit? Connectez-vous" : "Pas encore inscrit? Enregistrez-vous"}
                  </label>
                </div>
              </form>
              <GoogleLogin 
                clientId={process.env.REACT_APP_GOOGLE_ID}
                render={(renderProps) => (
                  <button
                    className="google-btn"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  ><FcGoogle/> Connexion avec Google</button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </div>
          </div>
        </div>
    </Div>
  )
}

export default Login