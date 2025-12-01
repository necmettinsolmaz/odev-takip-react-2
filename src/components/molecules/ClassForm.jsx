import React, {useState, useEffect } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
const ClassForm = ({onSelectChange, selectedClass}) => {
  
  // Sınıflar için state tanımlaması ve localStorage'dan başlangıç değeri alma
  const [classes, setClasses] = useState(() => {
    const storedClasses = JSON.parse(localStorage.getItem("classes")) || [];
    return storedClasses;
  });
  const [inputValue, setInputValue] = useState('');

  // Yeni sınıf ekleme fonksiyonu
  const handleAddClass = () => {  
    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') {
      alert('Sınıf adı bos birakilamaz');
      return;
    }
    const newClass = { 
      id: classes.length + 1, 
      name: trimmedValue,
      lessonName: '',
      students: [],
      homeWorks: []
    };
    setClasses( [...classes, newClass]);
    onSelectChange(newClass.name); // Yeni eklenen sınıfı seçili hale getir
    setInputValue('');
  }
   const handleRemoveClass = () => {
    const updatedClasses = classes.filter(clas => clas.name !== selectedClass);
    setClasses(updatedClasses);
    onSelectChange(updatedClasses[0]?.name || null); // İlk sınıfı seçili yap veya null
    
  };

  const handleUpdateLessonName = (newLessonName) => {
    const updatedClasses = classes.map(clas => {
      if (clas.name === selectedClass) {
        return { ...clas, lessonName: newLessonName };
      }
      return clas;
    });
    setClasses(updatedClasses);
  };

  useEffect(() => {
    onSelectChange(classes[0]?.name); // İlk sınıfı varsayılan olarak seçili yap
  }, []);

  // Sınıf ekleme işlemi sonrası localStorage güncellemesi
  useEffect(() => {
    localStorage.setItem("classes", JSON.stringify(classes));
  }, [classes]);

  
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-2 flex flex-wrap gap-3 items-center">
        <Input placeholder={"Yeni Sınıf Adı"} value={inputValue} onValueChange={setInputValue}/>
        <Button name="Sınıf Ekle"  renk="Yeşil" onClick={handleAddClass}/>
        <Select 
          classes={classes} 
          onSelectChange={onSelectChange}
          selectedValue={selectedClass}
        />
        <Button name="Sınıf Adını Düzenle" renk="default"/>
        <Button name="Sınıf Sil" renk="Kırmızı" onClick={handleRemoveClass}/> 
        <Input placeholder={"Yeni Öğrenci Adı"}/>
        <Button name="Öğrenci Ekle" renk="Yeşil" />
    </div>
  )
}

export default ClassForm
