import React from 'react'
import TableFilter from '../molecules/TableFilter'
import TableHeader from '../molecules/TableHeader'

const HomeworkTable = ({selectedClass}) => {
  return (
    <div className="pt-4">
        <TableFilter/>
        <TableHeader selectedClass={selectedClass}/>
    </div>
  )
}

export default HomeworkTable
