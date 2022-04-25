import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Div } from './Login.elements'
import auth from '../../assets/img/auth.png'
import Input from '../../components/Input/Input'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import InputPassword from '../../components/Input/InputPassword'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const isSignUp = false;

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <Div>
        <Navbar/>
        <div className="forms-container">
          <div className="signin-signup">

            <div className="image">
              <img src={auth} alt='Authentication Guy' />
            </div>

            <form
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <h2 className="title">
                {isSignUp ? "S'enregistrer" : "Se connecter"}
              </h2>

              {isSignUp && (
                <>
                  <Input 
                    icon={<FaUser/>}
                    type="text"
                    value={name}
                    placeholder="Pseudo"
                    name="pseudo"
                    handleChange={handleChange}
                  />
                </>
              )}
              <Input
                icon={<FaEnvelope/>}
                type="email"
                value={email}
                placeholder="E-Mail"
                name="email"
                handleChange={handleChange}
              />

              <InputPassword
                value={password}
                name="password"
                handleChange={handleChange}
              />

              <button type="submit" className='btn'>
                {isSignUp ? "Inscription" : "Connexion"}
              </button>

            </form>
          </div>
        </div>
    </Div>
  )
}

export default Login