import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
const ClassForm = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-2 flex flex-wrap gap-3 items-center">
        <Input placeholder={"Yeni Sınıf Adı"}/>
        <Button name="Sınıf Ekle" />
        <Select />
        <Button name="Sınıf Adını Düzenle" renk="Gelmedi"/>
        <Input placeholder={"Yeni Öğrenci Adı"}/>
        <Button name="Öğrenci Ekle" renk="Yaptı" />
    </div>
  )
}

export default ClassForm
