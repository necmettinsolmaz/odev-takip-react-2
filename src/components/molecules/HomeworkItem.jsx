import React from 'react'
import DatePicker, { registerLocale } from  'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import tr from 'date-fns/locale/tr';
import { FiBook } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { RiStopLargeLine } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";

registerLocale('tr', tr);
const HomeworkItem =  ({classes, selectedClass, homework, onViewDetails}) => {
  // Detayların gösterilip gösterilmeyeceğini kontrol eden state
  const [isExpanded, setIsExpanded] = React.useState(false);
  // Detay gösterimini açıp kapatan fonksiyon
  const handleToggleDetails = () => {
    setIsExpanded(!isExpanded);
  };
  // Detay gösterme ikonunun döndürülme durumunu belirler
  const ForwardIcon = isExpanded ? 'rotate-90' : 'rotate-0';

  const selectedClassObj = classes.find(clas => clas.name === selectedClass);
  if (!selectedClassObj) {
    return <div>Seçili sınıf bulunamadı.</div>;
  }
  // Kaynak Tipine Göre Renk ve Kısaltma Haritalaması (Küçük Harf Anahtarlar)
  const sourceMap = {
    'soru bankası': { color: 'bg-pink-600', initials: <FiBook /> },
    'fasikül': { color: 'bg-purple-600', initials: <IoBookOutline /> },
    'test': { color: 'bg-orange-600', initials: <FaRegFileAlt /> },
    'ek kaynak': { color: 'bg-yellow-600', initials: 'EK' },
    'diğer': { color: 'bg-gray-400', initials: 'D' }, // Varsayılan
  };

  // Büyük/Küçük Harf Duyarlılığını Kaldıran Yardımcı Fonksiyon
  const getSourceInfo = (source) => {
    // 1. Gelen kaynağı küçük harfe dönüştürüp boşlukları trim'liyoruz.
    const normalizedSource = source ? source.toLocaleLowerCase('tr').trim() : '';
    if (!normalizedSource) {
      return sourceMap['diğer'];
    }
    for (const key in sourceMap) {
      if (key !== 'diğer') {
        if (normalizedSource.includes(key)) {
          return sourceMap[key];
        }
      }
    }
    return sourceMap['diğer'];
  };
  const { color, initials } = getSourceInfo(homework.source);

  return ( 
  <div className=" bg-white shadow-md rounded-lg  mb-2">
    <div className="flex">
    <div className={`w-16 ${color} p-4 flex items-center rounded-l-lg owerflow-hidden justify-center`}>
        <span className="text-white text-xl font-semibold">{initials}</span>
    </div>
    <div className="flex-1 ml-4 py-2 h-20"> 
        <h3 className="text-sm font-bold text-gray-800 ">
            {homework.id}-{homework.topic}
             
        </h3>   
        <p className="text-sm text-gray-600 mt-1 flex items-center">
            {/* {homework.sourceIkon} buraya bir ikon eklenebilir */}
            {homework.source} 
            <span className={`w-3 h-3 rounded-full ml-3 ${true ? 'bg-yellow-500' : 'bg-gray-300'}`}></span>
            <CiBookmark /> 
            {homework.page} 
        </p>
      <div className='flex items-center w-full'>
        <div className="flex items-center ">
        
        <DatePicker 
            selected={new Date(homework.givenDate)} 
            onChange={() => {}} 
            locale="tr"
            dateFormat="dd MMM E" 
            className="px-0 text-sm "
            wrapperClassName="w-18"
        />
        <FiPlay />
         
         </div>
         <div className="flex-1 border-t border-black-900"></div>
         <div className="flex items-center"></div>
         <RiStopLargeLine />
        
        <DatePicker 
            selected={new Date(homework.checkDate)} 
            onChange={() => {}} 
            locale="tr"
            dateFormat="dd MMM E" 
            className="px-0 text-sm "
            wrapperClassName="w-18"
        />
      </div>
    </div>
   
    
    <div className="flex flex-col items-center justify-center">
        <button 
            className={`text-gray-600 hover:text-gray-800 pr-2 transition-transform duration-200 ${ForwardIcon}`} 
            onClick={handleToggleDetails} // TIKLANDIĞINDA AÇILIR/KAPANIR
        > 
            <IoIosArrowForward /> 
        </button>
    </div>
  </div>
   {/* --- YENİ EKLENECEK ALAN: DETAY VE ÖĞRENCİ LİSTESİ --- */}
  
  {isExpanded && (
    // Genişletilmiş detay içeriği: Ana kapsayıcı altına, tüm satıra yayılır.
    <div className="w-full bg-orange-50 p-4 rounded-b-lg" >
        
        <h3 className="text-md font-semibold mb-2 text-gray-800">Ödevi Yapması Gereken Öğrenciler:</h3>
        
        {selectedClassObj && selectedClassObj.students ? (
          <ul className="list-disc list-inside space-y-1 ml-4">
            {selectedClassObj.students.map(student => (
              <li key={student.id} className="text-gray-700 text-sm">
                {student.name} 
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500 text-sm">Öğrenci listesi bulunamadı.</p>
        )}

    </div>
  )}
    
    
</div>
      
    
  )
};

export default HomeworkItem
