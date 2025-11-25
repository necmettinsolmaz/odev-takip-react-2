import React from 'react'
import ClassForm from '../molecules/ClassForm'
import HomeworkForm from '../molecules/HomeworkForm'
const InputDataForm = ({onSelectChange}) => {
  return (
    <div >
        <h1 className="text-xl font-bold m-2">Takip Sistemi</h1>
        <ClassForm onSelectChange={onSelectChange}/>
        <HomeworkForm />
    </div>
  )
}

export default InputDataForm
