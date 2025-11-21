import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
const HomeworkForm = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-2 flex flex-wrap gap-3 items-center">
        <Input placeholder={"Kaynak"}/>
        <Input placeholder={"Konu"}/>
        <Input placeholder={"Sayfa"}/>
        <Button name="Ödev Ekle" renk="Yaptı"/>
    </div>
  )
}

export default HomeworkForm
