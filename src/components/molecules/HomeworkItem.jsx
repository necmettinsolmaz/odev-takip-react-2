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
import { motion, AnimatePresence } from 'framer-motion';


const HomeworkItem =  ({classes, selectedClass, homework, onUpdateHomeworkDate, isExpanded, onToggle}) => {
  // Detayların gösterilip gösterilmeyeceğini kontrol eden state
  
  const selectedClassObj = classes.find(clas => clas.name === selectedClass);
  if (!selectedClassObj) {
    return <div>Seçili sınıf bulunamadı.</div>;
  }
    // Kaynak Tipine Göre Renk ve Kısaltma Haritalaması (Küçük Harf Anahtarlar)
const colorMap = {
   'soru bankası': {
    bg: 'bg-pink-500',
    border: 'border-pink-500',
    text: 'text-pink-500',
    icon: FiBook,
  },
  'fasikül': {
    bg: 'bg-purple-500',
    border: 'border-purple-500',
    text: 'text-purple-500',
    icon: IoBookOutline,
  },
  'test': {
    bg: 'bg-orange-500',
    border: 'border-orange-500',
    text: 'text-orange-500',
    icon: FaRegFileAlt,
  },
  'ek kaynak': {
    bg: 'bg-yellow-500',
    border: 'border-yellow-500',
    text: 'text-yellow-500',
    icon: CiBookmark,
  },
  'diğer': {
    bg: 'bg-gray-400',
    border: 'border-gray-400',
    text: 'text-gray-400',
    icon: null,
  },
};

    // Büyük/Küçük Harf Duyarlılığını Kaldıran Yardımcı Fonksiyon
  const getColorMap = (source) => {
    // 1. Gelen kaynağı küçük harfe dönüştürüp boşlukları trim'liyoruz.
    const normalizedSource = source ? source.toLocaleLowerCase('tr').trim() : '';
    if (!normalizedSource) {
      return colorMap['diğer'];
    }
    for (const key in colorMap) {
      if (key !== 'diğer') {
        if (normalizedSource.includes(key)) {
          return colorMap[key];
        }
      }
    }
    return colorMap['diğer'];
  };
  const key = homework.source?.toLocaleLowerCase('tr').trim();
  const { bg: bg , border: border, text: text, icon: Icon } = getColorMap(key);



  return ( 
  <div className=" bg-white shadow-md rounded-lg  mb-2">
    <div className="flex">
    {/* sol şerit*/}
    <div className={`w-1 rounded-l ${bg}`}></div>

    <div className="flex-1 ml-4 py-2"> 
        <h3 className="text-base font-semibold text-gray-800 tracking-tight">
            {homework.id}-{homework.topic}
             
        </h3>   
        <p className="flex items-center gap-2 text-xs text-gray-600">
            {Icon && <Icon className={`${text} text-sm `} />}
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
            className='text-gray-600 hover:text-gray-800 pr-2 '
            onClick={onToggle} // TIKLANDIĞINDA AÇILIR/KAPANIR
        > 
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <IoIosArrowForward /> 
          </motion.div>
        </button>
    </div>
  
  </div>
    
  {/* --- YENİ EKLENECEK ALAN: DETAY VE ÖĞRENCİ LİSTESİ --- */}
  
  <AnimatePresence initial={false}>
  {isExpanded && (
    // Genişletilmiş detay içeriği: Ana kapsayıcı altına, tüm satıra yayılır.
    <motion.div
      initial={{ height: 0, opacity: 0}}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      style={{overflow: 'hidden'}}
    >
      <HomeworkDetailModal 
      selectedClass={selectedClass} 
      selectedClassObj={selectedClassObj} 
      homework={homework}
      onUpdateHomeworkDate={onUpdateHomeworkDate}
      />
    
    </motion.div>
  )}
    </AnimatePresence>
    
</div>
      
    
  )
};

export default HomeworkItem
