import React, { useState, useEffect } from 'react';

// Select Bileşeni (Kontrollü Hale Geldi)
const Select = ({classes, onSelectChange, selectedValue}) => {

  return (
    <select 
      id="classSelect" 
      className="p-2 border border-gray-300 rounded-lg bg-white 
                 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
      value={selectedValue || 'Sınıf Seçiniz'}// value prop'unu satate bağlı olarak ayarlıyor
      // e nesnesini alıp doğrudan işliyor ve onSelectChange'i çağırıyor. Ayrıca fonksiyon yazmaya gerek kalmadı.
      onChange={(e) => onSelectChange(e.target.value)}
    >
        <option value="">Sınıf Seciniz</option>
        {classes.map(clas => (          
          <option key={clas.id} value={clas.name}>
            {clas.name}
          </option>
        ))}
    </select>
  )
}

export default Select;