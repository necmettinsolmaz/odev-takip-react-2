import React from 'react'
import { useState } from 'react'
import Button from '../atoms/Button'
import { IoCameraOutline } from "react-icons/io5";

const TableHeader = ({selectedClass}) => {
  
 
  return (
    <div className="filter-area bg-white p-2 rounded-lg shadow-md mb-2 flex justify-between flex-wrap  items-center"> 
      <h1 className="text-md font-bold m-2"> {selectedClass} Sınıfı Ödev Tablosu</h1>
      <Button name="Paylaş" renk="Gelmedi"  ><IoCameraOutline /></Button>
    </div>
  )
}

export default TableHeader
