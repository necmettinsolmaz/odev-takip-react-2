import React from 'react'
import HomeworkItem from '../molecules/HomeworkItem'

const HomeworkList = React.forwardRef(({ classes, selectedClass }, ref) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedHomework, setSelectedHomework] = React.useState(null);
   
  const selectedClassObj = classes.find(clas => clas.name === selectedClass);
  if (!selectedClassObj) {
    return <div>Seçili sınıf bulunamadı.</div>;
  }

  return (
    <div ref={ref} >
      {selectedClassObj.homeworks
      .sort((a, b) => b.id - a.id)// ID'ye göre azalan sırada sırala
      .map((homework) => (
        <HomeworkItem 
          key={homework.id} 
          classes={classes} 
          selectedClass={selectedClass} 
          homework={homework} 
        />
      ))}
     
    </div>
  );
});

export default HomeworkList
