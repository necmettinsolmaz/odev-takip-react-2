
import { useState, useEffect } from 'react'
import InputDataForm from '../organisms/InputDataForm'
import HomeworkTable from '../organisms/HomeworkTable'

const Pages = () => {
  
 // Sınıflar için state tanımlaması ve localStorage'dan başlangıç değeri alma
  const [classes, setClasses] = useState(() => {
    const storedClasses = JSON.parse(localStorage.getItem("classes")) || [];
    return storedClasses;
  });
  // Seçili sınıf için state tanımlaması
  const [selectedClass, setSelectedClass] = useState(null);

  // Sınıf seçme fonksiyonu
  const handleSelectChange = (value) => {
    setSelectedClass(value);
  };

  // Yeni sınıf ekleme fonksiyonu
  const handleAddClass = (newClassName) => { 
    // Aynı isimde sınıf var mı kontrolü
    const exists = classes.some(cls => 
      cls.name.toLowerCase() === newClassName.toLowerCase()
    );    
    // Eğer varsa uyarı ver ve ekleme yapma
    if (exists) {
      alert("Bu sınıf zaten mevcut!");
      return;
    }
    // Yeni sınıf objesi oluşturma ve state'i güncelleme
    const newClass = { 
      id: classes.length + 1, 
      name: newClassName,
      lessonName: 'Ders Adı',
      students: [],
      homeworks: []
    };
    // Sınıflar listesine yeni sınıfı ekleme
    setClasses( [...classes, newClass]);
    // Yeni eklenen sınıfı seçili hale getir
    setSelectedClass(newClass.name); 
  }
   const handleRemoveClass = () => {
    // Seçili sınıfı silme
    const updatedClasses = classes.filter(clas => clas.name !== selectedClass);
    setClasses(updatedClasses);
    
    
  };

  const handleAddStudentToClass = (studentObject) => {
    const updatedClasses = classes.map(clas => {
      if (clas.name === selectedClass) { 
        return { ...clas, students: [...clas.students, studentObject] };
      }
     return clas;
  });
  setClasses(updatedClasses);
  };

  const handleUpdateLessonName = (newLessonName) => {
    // Seçili sınıfın ders adını güncelleme
    const updatedClasses = classes.map(clas => {
      if (clas.name === selectedClass) {
        return { ...clas, lessonName: newLessonName };
      }
      return clas;
    });
    setClasses(updatedClasses);
  };
  const handleAddHomeworkToClass = (homeworkObject) => {
    const updatedClasses = classes.map(clas => {
      if (clas.name === selectedClass) {
        return { ...clas, homeworks: [...clas.homeworks, homeworkObject] };
      }
      return clas;
    });
    setClasses(updatedClasses);
  };
   const handleUpdateHomeworkDate = (id, field, value) => {
    const updatedClasses = classes.map(clas => {
      if (clas.name === selectedClass) {
        const updatedHomeworks = clas.homeworks.map(hw => {
          if (hw.id === id) {
            return { ...hw, [field]: value };
          }
          return hw;
        });
        return { ...clas, homeworks: updatedHomeworks };
      }
      return clas;
    });
    setClasses(updatedClasses);
  };  
  // Sınıf ekleme işlemi sonrası localStorage güncellemesi
  useEffect(() => {
    localStorage.setItem("classes", JSON.stringify(classes));
  }, [classes]);


  return (
    <div className="font-sans p-4 bg-gray-100">
        
        <InputDataForm 
          onSelectChange={handleSelectChange}
          selectedClass={selectedClass}
          onAddClass={handleAddClass}
          onRemoveClass={handleRemoveClass}
          onAddStudentToClass={handleAddStudentToClass}
          classes={classes}
          onAddHomework={handleAddHomeworkToClass}
        />
        <HomeworkTable 
          selectedClass={selectedClass} 
          classes={classes} 
          onUpdateHomeworkDate={handleUpdateHomeworkDate}
          onSelectChange={handleSelectChange}
        />
    </div>
  )
}

export default Pages
