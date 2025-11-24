import React, { useState, useEffect } from 'react';

const Select = ({classes}) => {
 
  return (
    <select 
      id="classSelect" 
      className="p-2 border border-gray-300 rounded-lg bg-white 
                 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
      defaultValue="Sınıf Seçiniz"
    >
        <option>
          Sınıf Seçiniz
        </option>     
        {classes.map(clas => (
          <option key={clas.id} value={clas.id}>
            {clas.name}
          </option>
        ))}
    </select>
  )
}

export default Select;