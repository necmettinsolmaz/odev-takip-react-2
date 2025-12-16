// src/components/molecules/HomeworkDetailModal.jsx (Örnek Yapı)

import React from 'react';
import HomeworkItem from './HomeworkItem';

const HomeworkDetailModal = ({ selectedClass, selectedClassObj }) => {
   
  return (
   <div className="w-full bg-orange-50 p-4 rounded-b-lg" >        
        <h3 className="text-md font-semibold mb-2 text-gray-800">{selectedClass} {selectedClass.lessonName}Sınıfı Ödevleri:</h3>
                
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
  );
};
export default HomeworkDetailModal;