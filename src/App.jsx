import { useState } from 'react'
import './App.css'
import Button from './components/atoms/Button'
import Input from './components/atoms/Input'
import Select from './components/atoms/Select'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans bg-gray-100 p-5 md:p-10">
      <h1 className="text-xl font-bold m-2">Takip Sistemi</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-3 items-center">
        <Input placeholder={"Yeni Sınıf Adı"}/>
        <Button name="Sınıf Ekle" />
        <Select />
        <Button name="Sınıf Adını Düzenle" renk="Gelmedi"/>
        <Input placeholder={"Yeni Öğrenci Adı"}/>
        <Button name="Öğrenci Ekle" renk="Yaptı" />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-3 items-center">
        <Input placeholder={"Kaynak"}/>
        <Input placeholder={"Konu"}/>
        <Input placeholder={"Sayfa"}/>
        <Button name="Ödev Ekle" renk="Yaptı"/>
      </div>
    </div>
  )
}

export default App
