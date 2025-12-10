// src/components/organisms/HomeworkDetailModal.jsx (Örnek Yapı)

import React from 'react';
import HomeworkItem from '../molecules/HomeworkItem';

const HomeworkDetailModal = ({ homework, className, onClose, classes }) => {
    const selectedClassObj = classes.find(clas => clas.name === className);
    const selectedHomework = selectedClassObj
      ? selectedClassObj.homeworks.find(hw => hw.id === homework)
      : null;
  return (
    // Tailwind CSS kullanarak sabit ekran/modal overlay yapısı
    <div className="fixed inset-0 bg-amber-100 bg-opacity-50 flex items-center justify-center z-50">
     
    </div>
  );
};
export default HomeworkDetailModal;