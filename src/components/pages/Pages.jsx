import React from 'react'
import { useState } from 'react'
import InputDataForm from '../organisms/InputDataForm'
import HomeworkTable from '../organisms/HomeworkTable'

const Pages = () => {
  
  const [selectedClass, setSelectedClass] = useState(null);
  // Sınıf seçme fonksiyonu
  const updateSelectedClass = (selectedItem) => {
    setSelectedClass(selectedItem);  
  }

  return (
    <div className="font-sans p-4 bg-gray-100">
        <InputDataForm onSelectChange={updateSelectedClass}/>
        <HomeworkTable selectedClass={selectedClass}/>
    </div>
  )
}

export default Pages
