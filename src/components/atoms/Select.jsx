import React, { useState, useEffect } from 'react';

// === Gerekli Sabitler ===
const STORAGE_KEY = 'odevTakipData'; 
// JSON objesindeki sınıf kodu olmayan anahtarlar
const CONTROL_KEYS = ['appVersion', 'studentsMaster', 'settings', 'lastSaved'];

// LOCAL STORAGE BOŞSA EKLENECEK BAŞLANGIÇ VERİSİ (Minimum Örnek)

const Select = () => {
 
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
      
    </select>
  )
}

export default Select;