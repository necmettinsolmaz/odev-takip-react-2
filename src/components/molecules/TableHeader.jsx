import React from 'react'
import { useState } from 'react'
import Button from '../atoms/Button'
import { IoCameraOutline } from "react-icons/io5";
import { FaRegFileExcel } from "react-icons/fa";
const TableHeader = ({selectedClass}) => {
  
 
  return (
    <div className="filter-area bg-white p-2 rounded-lg shadow-md mb-2 flex justify-between items-center"> 
      <h1 className="text-md font-bold m-2"> {selectedClass} Sınıfı Ödev Tablosu</h1>
      <div className='flex gap-2'>
        <Button name="Paylaş" renk="Mor"  ><IoCameraOutline /></Button>
        <Button name="Excel" renk="Gri"><FaRegFileExcel /></Button>
      </div>
    </div>
  )
}

export default TableHeader
