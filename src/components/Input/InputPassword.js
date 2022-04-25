import React, { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import { FaLock } from 'react-icons/fa';
import { Div } from './InputPassword.elements'

const InputPassword = ({
    handleChange,
    name,
    placeholder
}) => {

    const [passwordShown, setPasswordShown] = useState(false)
    const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Div>
        <div className="icon">
            <FaLock/>
        </div>
        <input
            name={name}
            type={passwordShown ? "text" : "password"}
            onChange={handleChange}
            required
            autoComplete='off'
            placeholder={placeholder}
        />
        <div className="show" onClick={togglePassword}>
            {passwordShown ? <BiHide/> : <BiShow/>}
        </div>
    </Div>
  )
}

export default InputPassword