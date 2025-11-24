import React, {useState, useEffect } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
const ClassForm = () => {
  
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
    const newClass = { id: classes.length + 1, name: inputValue };
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
        <Button name="Sınıf Ekle" onClick={handleAddClass}/>
        <Select classes={classes} />
        <Button name="Sınıf Adını Düzenle" renk="Gelmedi"/>
        <Input placeholder={"Yeni Öğrenci Adı"}/>
        <Button name="Öğrenci Ekle" renk="Yaptı" />
    </div>
  )
}

export default ClassForm
