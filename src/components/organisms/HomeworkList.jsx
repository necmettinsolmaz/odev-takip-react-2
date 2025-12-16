import React, { useState } from 'react'
import HomeworkItem from '../molecules/HomeworkItem'
import { IoCalendarClearOutline } from 'react-icons/io5';

const HomeworkList = React.forwardRef(({ classes, selectedClass, onUpdateHomeworkDate }, ref) => {
   
  const selectedClassObj = classes.find(clas => clas.name === selectedClass);
  if (!selectedClassObj) {
    return <div>Seçili sınıf bulunamadı.</div>;
  }
  const [expandedHomeworkId, setExpandedHomeworkId] = useState(null);

  const handleToggle = (id) => {
    setExpandedHomeworkId(prev => prev === id ? null : id
    );
  };
  // ödev tarihlerinin düzenlenmesi için fonksiyon eklenebilir  
 
  return (
    <div ref={ref} >
       <div className="bg-blue-600 text-white px-4 py-3 rounded-xl flex items-center gap-2 max-w-md mx-auto mb-2 shadow-sm">
       <IoCalendarClearOutline />
        <span className="text-sm font-semibold tracking-tight">
          {selectedClass} {selectedClassObj.lessonName} Dersi Ödev Listesi
        </span>
      </div>
      {selectedClassObj.homeworks
      .sort((a, b) => b.id - a.id)// ID'ye göre azalan sırada sırala
      .map((homework) => (
        <HomeworkItem 
          key={homework.id} 
          classes={classes} 
          selectedClass={selectedClass} 
          homework={homework} 
          onUpdateHomeworkDate={onUpdateHomeworkDate}
          /* 👇 AKORDİYON PROPS */
          isExpanded={expandedHomeworkId === homework.id}
          onToggle={() => handleToggle(homework.id)}
        />
      ))}
     
    </div>
  );
});

export default HomeworkList
