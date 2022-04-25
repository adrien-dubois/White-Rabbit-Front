import React from 'react'
import { Div } from './Input.elements'

const Input = ({ 
    handleChange,
    icon, 
    type, 
    value, 
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
            value={value}
            placeholder={placeholder}
        />
    </Div>
  )
}

export default Input