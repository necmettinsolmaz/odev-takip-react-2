import React, {useState, useEffect } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
const ClassForm = ({onSelectChange, selectedClass}) => {
  
  // Sınıflar için state tanımlaması ve localStorage'dan başlangıç değeri alma
  const [classes, setClasses] = useState(() => {
    return JSON.parse(localStorage.getItem("classes")) || [];
  });
  const [inputValue, setInputValue] = useState('');
  



  // Bileşen yüklendiğinde localStorage'dan sınıfları al
  useEffect(() => {
    const storedClasses = JSON.parse(localStorage.getItem("classes")) || [];
    setClasses(storedClasses);
  }, []);

  // Yeni sınıf ekleme fonksiyonu
  const handleAddClass = () => {  
    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') {
      alert('Sınıf adı bos birakilamaz');
      return;
    }
    const newClass = { id: classes.length + 1, name: trimmedValue };
    setClasses( [...classes, newClass]);
    setInputValue('');
  }

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
        <Input placeholder={"Yeni Öğrenci Adı"}/>
        <Button name="Öğrenci Ekle" renk="Yeşil" />
    </div>
  )
}

export default ClassForm
