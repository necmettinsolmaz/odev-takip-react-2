import React, {useState} from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const calculateInitialDates = () => {
  const today = new Date();
  const givenDateStr = today.toISOString().split('T')[0];
  const checkDateObj = new Date();  
  checkDateObj.setDate(checkDateObj.getDate() + 7); // 7 gün ekle
  const checkDateStr = checkDateObj.toISOString().split('T')[0];
  return { givenDateStr, checkDateStr };
}
const HomeworkForm = ({onAddHomework, classes, selectedClass}) => {
  const { givenDateStr, checkDateStr } = calculateInitialDates();
  const [source, setSource] = useState('');
  const [topic, setTopic] = useState('');
  const [page, setPage] = useState('');
  const [givenDate, setGivenDate] = useState(givenDateStr);
  const [checkDate, setCheckDate] = useState(checkDateStr);
  const handleAddHomework = () => {
    const trimmedSource = source.trim();
    const trimmedTopic = topic.trim();
    const trimmedPage = page.trim();
    if (!trimmedSource || !trimmedTopic || !trimmedPage) {
      alert("Lütfen bos alanları doldurunuz!");
      return;
    }
    setGivenDate(new Date().toLocaleDateString());
    setCheckDate(new Date().toLocaleDateString());
    const newHomework = {
      id: classes.find(clas => clas.name === selectedClass).homeworks.length + 1,
      source: trimmedSource,
      topic: trimmedTopic,
      page: trimmedPage,
      givenDate: givenDate,
      checkDate: checkDate
    };
    onAddHomework(newHomework);
    setSource('');
    setTopic('');
    setPage('');
  }
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
