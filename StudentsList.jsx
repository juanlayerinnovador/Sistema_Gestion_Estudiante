import React from 'react'
import { StudetsCard } from './StudetsCard'

export const StudentsList = ({ alumnos }) => {
    const [alumno] = React.useState(alumnos)
  return (
        <><div>
            <h1>Lista de alumnos</h1>
        <StudetsCard alumno={alumno} />
      </div></>

  )
}
