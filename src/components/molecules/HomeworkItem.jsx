import React from 'react'
import DatePicker from  'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // 👈 Stilleri içe aktar
const HomeworkItem =  React.forwardRef(({classes, selectedClass}, ref) => {
  const selectedClassObj = classes.find(clas => clas.name === selectedClass);
  if (!selectedClassObj) {
    return <div>Seçili sınıf bulunamadı.</div>;
  }
  
  return (
    <div ref={ref}>
      <h1 className="text-xl font-bold mb-4">{selectedClass} Sınıfı Ödevleri</h1>
      {selectedClassObj.homeworks.map(homework => (
        <div
          key={homework.id}
         
        >
         
          
         
          <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500 mb-2 flex justify-between items-start">
            
            {/* SOL KISIM: Ödev Bilgileri */}
            <div className="flex-2 min-w-0 pr-4">
                
                {/* 1. Başlık ve Konu */}
                <h3 className="text-lg font-bold text-gray-800">
                    <span className="text-blue-600 mr-2">{homework.id}</span>
                    {homework.topic}
                </h3>
                
                {/* 2. Kaynak */}
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                    <span className="mr-1">📚</span>
                    {homework.source}
                </p>
                
                {/* 3. Sayfa ve Durum (Sarı Nokta) */}
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                    Sayfa: {homework.page} 
                    <span className={`w-3 h-3 rounded-full ml-3 ${true ? 'bg-yellow-500' : 'bg-gray-300'}`}></span>
                </p>
            </div>

            {/* SAĞ KISIM: Tarih Akışı ve İlerleme */}
            <div className="flex flex-col items-end text-right min-w-[60px]">
                
                {/* ÜST TARİH: Verilme Tarihi */}
                <div className="flex items-center space-x-2">
                    <span className="text-blue-600">▷</span> {/* Play ikonu gibi */}
                    <DatePicker
                        selected={homework.givenDate}
                        dateFormat="dd MMM E" // Örnek: 25 Eyl Per
                        className="font-medium text-gray-800 focus:outline-none w-full cursor-pointer"
                    />
                </div>

                {/* ARA ÇİZGİ ve GÜN FARKINI GÖSTEREN BİLGİ */}
                <div className="h-5 w-px bg-gray-300 mr-3.5 my-1 relative">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-500 bg-white px-1 whitespace-nowrap">
                        7 gün
                    </span>
                </div>
                
                {/* ALT TARİH: Kontrol Tarihi */}
                <div className="flex items-center space-x-2">
                    <span className="text-blue-600">◻</span> {/* Kare ikonu gibi */}
                    <DatePicker
                        selected={homework.checkDate}
                        dateFormat="dd MMM E" // Örnek: 2 Eki Per
                        className="font-medium text-gray-800 focus:outline-none w-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
        </div>

      ))}
      
    </div>
  )
});

export default HomeworkItem
