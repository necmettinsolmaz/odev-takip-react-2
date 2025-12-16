import React from 'react'
import DatePicker, { registerLocale } from  'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import tr from 'date-fns/locale/tr';
import { FiBook } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import HomeworkDetailModal from './HomeworkDetailModal';
import CustomCalendar from '../atoms/CustomCalendar';
import { FiBookOpen } from "react-icons/fi";
import Calendar from 'react-calendar';
registerLocale('tr', tr);


const HomeworkItem =  ({classes, selectedClass, homework, onUpdateHomeworkDate, isExpanded, onToggle}) => {
  // Detayların gösterilip gösterilmeyeceğini kontrol eden state


  // Detay gösterme ikonunun döndürülme durumunu belirler
  const ForwardIcon = isExpanded ? 'rotate-90' : 'rotate-0';
  
  const selectedClassObj = classes.find(clas => clas.name === selectedClass);
  if (!selectedClassObj) {
    return <div>Seçili sınıf bulunamadı.</div>;
  }
    // Kaynak Tipine Göre Renk ve Kısaltma Haritalaması (Küçük Harf Anahtarlar)
  const sourceMap = {
    'soru bankası': { 
      color: 'bg-pink-600', 
      icon: <FiBook />, 
      initials: 'SB' 
    },
    'fasikül': { 
      color: 'bg-purple-600', 
      icon: <IoBookOutline />, 
      initials: 'F' 
    },
    'test': { 
      color: 'bg-orange-600', 
      icon: <FaRegFileAlt />, 
      initials: 'T' 
    },
    'ek kaynak': { 
      color: 'bg-yellow-600', 
      icon: null, 
      initials: 'EK' 
    },
    'diğer': { 
      color: 'bg-gray-400', 
      icon: null, 
      initials: 'D' 
    },
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
  const item = { color, initials, icon: getSourceInfo(homework.source).icon };



  return ( 
  <div className=" bg-white shadow-md rounded-lg  mb-2">
    <div className="flex">
    {/* sol şerit*/}
    <div className="w-1 rounded-l bg-amber-500"></div>
    <div className="flex-1 ml-4 py-2"> 
        <h3 className="text-base font-semibold text-gray-800 tracking-tight">
            {homework.id}-{homework.topic}
             
        </h3>   
        <p className="flex items-center gap-2 text-xs text-gray-600">
            <FiBookOpen />
            {homework.source} 
            <span className="text-gray-400">•</span>
            {homework.page} 
        </p>
     
       <div className="flex items-center gap-1 mt-2 bg-gray-200 px-1   rounded-md w-fit">
          <IoCalendarClearOutline className="w-3 h-3 text-gray-600" />

          <DatePicker 
            selected={homework.givenDate} 
            onChange={(date) => onUpdateHomeworkDate(homework.id, "givenDate", date)}
            locale="tr"
            dateFormat="dd MMM E"
            wrapperClassName="flex items-center"
            className="
              w-[60px]
              bg-transparent
              text-[10px]
              font-medium
              text-gray-700
              outline-none
              cursor-pointer
              leading-none
              
            "
          />  
        </div>


      
    </div>
    <div className='flex items-center pr-4'>
       <DatePicker 
              selected={homework.checkDate} 
              onChange={(date) => onUpdateHomeworkDate(homework.id, "checkDate", date)}
              locale="tr"
              dateFormat="dd MMM E" 
              customInput={<CustomCalendar homeworkCheckDate={homework.checkDate} />}
            />
        </div>
    <div className="flex flex-col items-center justify-center">
        <button 
            className={`text-gray-600 hover:text-gray-800 pr-2 transition-transform duration-200 ${ForwardIcon}`} 
            onClick={onToggle} // TIKLANDIĞINDA AÇILIR/KAPANIR
        > 
        <IoIosArrowForward /> 
        </button>
    </div>
  
  </div>
    
  {/* --- YENİ EKLENECEK ALAN: DETAY VE ÖĞRENCİ LİSTESİ --- */}
   <div className={`transition-all duration-1000 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
    
  {isExpanded && (
    // Genişletilmiş detay içeriği: Ana kapsayıcı altına, tüm satıra yayılır.
   
      <HomeworkDetailModal 
      selectedClass={selectedClass} 
      selectedClassObj={selectedClassObj} 
      homework={homework}
      onUpdateHomeworkDate={onUpdateHomeworkDate}
      />
    

  )}
    </div>
    
</div>
      
    
  )
};

export default HomeworkItem
