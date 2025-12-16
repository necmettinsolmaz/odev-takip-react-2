import React, {useState} from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
// İlk tarihleri hesaplayan yardımcı fonksiyon



const HomeworkForm = ({ onAddHomework, classes, selectedClass }) => {
  // Form state
  const [source, setSource] = useState("");
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState("");
  const [givenDate, setGivenDate] = useState(new Date())
  const [checkDate, setCheckDate] = useState(new Date());

  
 
  // Form gönderme
  const handleAddHomework = () => {
    const trimmedSource = source.trim();
    const trimmedTopic = topic.trim();
    const trimmedPage = page.trim();
    const targetClass = classes.find(c => c.name === selectedClass);

    const newHomework = {
      id: (targetClass?.homeworks.length || 0) + 1,
      source: trimmedSource,
      topic: trimmedTopic,
      page: trimmedPage,
      givenDate: givenDate,    
      checkDate: givenDate + 7 * 24 * 60 * 60 * 1000, // varsayılan kontrol tarihi, verilen tarihten 7 gün sonra
    };


   
    if (!trimmedSource || !trimmedTopic || !trimmedPage) {
      alert("Lütfen boş alanları doldurunuz!");
      return;
    }
    onAddHomework(newHomework);
    // Formu resetle
    setSource("");
    setTopic("");
    setPage("");
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-2 flex flex-wrap gap-3 items-center">
        <Input placeholder={"Kaynak"} value={source} onChange={(e) => setSource(e.target.value)}/>
        <Input placeholder={"Konu"} value={topic} onChange={(e) => setTopic(e.target.value)}/>
        <Input placeholder={"Sayfa"} value={page} onChange={(e) => setPage(e.target.value)}/>

        <Button name="Ödev Ekle" renk="Yeşil" onClick={handleAddHomework}/>
    </div>
  )
}

export default HomeworkForm
