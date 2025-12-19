import React, { useRef } from 'react'
import { toPng } from 'html-to-image';
import Button from '../atoms/Button'
import { IoCameraOutline } from "react-icons/io5";
import { FaRegFileExcel } from "react-icons/fa";
import Select from '../atoms/Select';
const TableHeader = ({selectedClass, handlePNGExport, onSelectChange, classes}) => {
 // 1. Ekran görüntüsü alınacak alanı işaretlemek için ref oluşturun

  // 2. Dışa Aktarma Fonksiyonu
  const onExportToPNG = () => {
    console.log("Dışa Aktarma Butonuna Tıklandı");
    if (!handlePNGExport) return;
    handlePNGExport();
  };

  return (
    <div >
      <div  className=" bg-white p-2 rounded-lg shadow-md mb-2 flex items-center"> 
        <div className='flex flex-1 gap-2 w-full'>
        <Select 
        options={classes} 
        onSelectChange={onSelectChange}
        selectedValue={selectedClass}
        />
        </div>
        <div className='flex gap-2 no-export-items'>
          <Button name="Paylaş" renk="Mor"  onClick={onExportToPNG}><IoCameraOutline  /></Button>
          <Button name="Excel" renk="Gri"><FaRegFileExcel /></Button>
        </div>        
      </div>
      
    </div>
  )
}

export default TableHeader
