import React, { useRef } from 'react'
import { toPng } from 'html-to-image';
import Button from '../atoms/Button'
import { IoCameraOutline } from "react-icons/io5";
import { FaRegFileExcel } from "react-icons/fa";
const TableHeader = ({selectedClass}) => {
 // 1. Ekran görüntüsü alınacak alanı işaretlemek için ref oluşturun
  const componentRef = useRef(null);

  // 2. Dışa Aktarma Fonksiyonu
const handlePNGExport = () => {
  console.log("PNG Dışa Aktarma Başladı");
    // 1. Ref'in mevcut DOM düğümünü kontrol edin
    if (componentRef.current === null) {
      return;
    }
    // 2. toPng fonksiyonunu kullanın
    toPng(componentRef.current, { 
        cacheBust: true, // Yeni görüntüyü zorlar
        skipFonts: true, // Yazı tipi yükleme sorunlarını engeller
        // html2canvas'taki scale ayarına karşılık gelir (daha yüksek çözünürlük)
        pixelRatio: 2, 
        filter: (node) => {
                // nodeType 1, Element türü demektir
                if (node.nodeType === 1) { 
                    //classList'te 'no-export-item' sınıfı varsa false döndür (hariç tut)
                    return !node.classList.contains('no-export-items'); 
                }
                return true; // Diğer tüm öğeleri (metin, yorum vb.) dahil et
            }
    })
    .then((dataUrl) => {
      // 3. İndirme işlemini tetikleyin
      const link = document.createElement('a');
      link.download = `${selectedClass}_Basligi.png`;
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.error('Görüntü oluşturulurken hata oluştu:', err);
    });
  };


  return (
    <div ref={componentRef}>
    <div  className="filter-area bg-white p-2 rounded-lg shadow-md mb-2 flex justify-between items-center"> 
      <h1 className="text-md font-bold m-2"> {selectedClass} Sınıfı Ödev Tablosu</h1>
      <div className='flex gap-2 no-export-items'>
        <Button name="Paylaş" renk="Mor"  onClick={handlePNGExport}><IoCameraOutline  /></Button>
        <Button name="Excel" renk="Gri"><FaRegFileExcel /></Button>
      </div>
      
    </div>
   
      </div>
  )
}

export default TableHeader
