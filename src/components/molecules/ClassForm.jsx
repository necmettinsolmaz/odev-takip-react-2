import React, {useState, useEffect } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
const ClassForm = ({onSelectChange, selectedClass, onAddClass, onRemoveClass, onAddStudentToClass, classes}) => {
  
  const [className, setClassName] = useState('');
  const [studentName, setStudentName] = useState('');
  const handleInputChange = (event) => {
    setClassName(event.target.value);
  }
  const handleAddClass = () => {
    const trimmedValue = className.trim();
    if (trimmedValue === '') {
      alert('Sınıf adı boş bırakılamaz');
      return;
    }

    onAddClass(trimmedValue);
    setClassName('');
  }

 const handleAddStudent = () => {
  const trimmedName = studentName.trim();
  if (!trimmedName) {
    alert("Öğrenci adı boş olamaz!");
    return;
  }
  const classObj = classes.find(clas => clas.name === selectedClass);
  if (!classObj) {
    alert("Lütfen önce bir sınıf seçin!");
    return;
  }
  const newStudent = {
    id: `${selectedClass}0${classObj.students.length + 1}`,// benzersiz id
    name: trimmedName
  };

  onAddStudentToClass(newStudent); // parent componentteki handleAddStudentToClass fonksiyonu
  setStudentName(''); // inputu temizle
};

  
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-2 flex flex-wrap gap-3 items-center">
      <Input placeholder={"Yeni Sınıf Adı"} value={className} onChange={handleInputChange}/>
      <Button name="Sınıf Ekle"  renk="Yeşil" onClick={handleAddClass}/>
      <Select 
        classes={classes} 
        onSelectChange={onSelectChange}
        selectedValue={selectedClass}
      />
      <Button name="Sınıf Adını Düzenle" renk="default"/>
      <Button name="Sınıf Sil" renk="Kırmızı" onClick={onRemoveClass}/> 
      <Input placeholder={"Yeni Öğrenci Adı"} value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      <Button name="Öğrenci Ekle" renk="Yeşil" onClick={handleAddStudent}/>
    </div>
  )
}

export default ClassForm
