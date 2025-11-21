import React from 'react'

const Input = ({placeholder}) => {
  return (
    <input 
      type="text" 
      id="newClassName" 
      placeholder={placeholder}
      className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 grow min-w-[150px]"
    >
      
    </input>
  )
}

export default Input
