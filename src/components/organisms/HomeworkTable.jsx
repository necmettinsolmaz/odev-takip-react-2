import React from 'react'
import TableFilter from '../molecules/TableFilter'
import TableHeader from '../molecules/TableHeader'
import HomeworkList from '../organisms/HomeworkList'
import { toPng } from 'html-to-image';
import { useRef } from 'react';
const HomeworkTable = ({selectedClass,classes, onUpdateHomeworkDate, onSelectChange}) => {
  const homeworkRef = useRef(null);
  const handlePNGExport = () => {
    
    console.log("PNG Dışa Aktarma Başladı");
    // 1. Ref'in mevcut DOM düğümünü kontrol edin
    if (homeworkRef.current === null) {
      return;
    }
    // 2. toPng fonksiyonunu kullanın
    toPng(homeworkRef.current, { 
      backgroundColor: '#ffffff', // Beyaz arka plan ekle
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
    <div className="pt-4">
        <TableFilter/>
        <TableHeader classes={classes} selectedClass={selectedClass} handlePNGExport={handlePNGExport} onSelectChange={onSelectChange}/>
        <HomeworkList 
          classes={classes} 
          selectedClass={selectedClass} 
          ref={homeworkRef} 
          onUpdateHomeworkDate={onUpdateHomeworkDate}
        />
    </div>
  )
}

export default HomeworkTable
