import React from 'react'
import Button from '../atoms/Button'
import { IoCameraOutline } from "react-icons/io5";

const TableHeader = () => {
  return (
    <div className="filter-area bg-white p-2 rounded-lg shadow-md mb-2 flex justify-between flex-wrap  items-center"> 
      <h1 className="text-xl font-bold m-2">11 MF1 Sınıfı Ödev Tablosu</h1>
      <Button name="Paylaş" renk="Gelmedi"  ><IoCameraOutline color="white" size={20}/></Button>
    </div>
  )
}

export default TableHeader
