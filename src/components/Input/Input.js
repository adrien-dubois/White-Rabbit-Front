import React from 'react'
import { Div } from './Input.elements'

const Input = ({ 
    handleChange,
    icon, 
    type, 
    placeholder,
    name
}) => {

  return (
    <Div>
        <div className="icon">
            {icon}
        </div>
        <input
            name={name}
            type={type}
            onChange={handleChange}
            required
            autoComplete='off'
            placeholder={placeholder}
        />
    </Div>
  )
}

export default Input