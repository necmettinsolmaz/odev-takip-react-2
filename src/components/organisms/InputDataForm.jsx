import React from 'react'
import ClassForm from '../molecules/ClassForm'
import HomeworkForm from '../molecules/HomeworkForm'
import Button from '../atoms/Button'
import { GrDocumentUpload } from "react-icons/gr";
import { GrDocumentDownload } from "react-icons/gr";

const InputDataForm = ({onSelectChange, selectedClass, onAddClass, onRemoveClass, onAddStudentToClass, onAddHomework, classes}) => {
  return (
    <>
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-xl font-bold m-2">Takip Sistemi</h1>
      
      <div className="flex gap-1 items-center">
        <Button name="Yedekle" renk="Gri" ><GrDocumentUpload /></Button>
        <Button name="Yükle" renk="Gri" ><GrDocumentDownload /></Button>
      </div>
    </div>
    <div>  
        <ClassForm 
          onSelectChange={onSelectChange}
          selectedClass={selectedClass}
          onAddClass={onAddClass}
          onRemoveClass={onRemoveClass}
          onAddStudentToClass={onAddStudentToClass}
          classes={classes}
        />
        <HomeworkForm onAddHomework={onAddHomework} classes={classes} selectedClass={selectedClass}/>
    </div>
    </>
  )
}

export default InputDataForm
