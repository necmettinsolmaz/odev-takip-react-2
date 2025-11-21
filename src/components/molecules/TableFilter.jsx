import React from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { LuFilter } from "react-icons/lu";
const TableFilter = () => {
  return (
    <div className="filter-area bg-white p-2 rounded-lg shadow-md mb-2 flex flex-wrap gap-3 items-center"> 
        <Input placeholder={"Satır No Filtresi (Örn: 5, 7-17"} />
        <Button name="Filtrele" renk="Yapmadı" ><LuFilter /></Button>
    </div>
  )
}

export default TableFilter
