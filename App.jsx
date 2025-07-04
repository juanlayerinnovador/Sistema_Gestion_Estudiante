import React from 'react'
import { ALUMNOS } from './Consts/Const'
import { StudentsList } from './Components/StudentsList'
import { Form } from './Components/Form'
export const App = () => {
    const [alumnos] = React.useState(ALUMNOS)
        const [mostrarForm, setMostrarForm] = React.useState(false)
        const llamarform = () => {
            setMostrarForm(true)
            setMostrarStudents(false)
        }
            const [mostrarStudents, setMostrarStudents] = React.useState(true)
        const llamarStudents = () => {
            setMostrarStudents(true)
            setMostrarForm(false)
        }
  return (
    <div>
        <button onClick={llamarform}>Añadir alumno</button>
        <button onClick={llamarStudents}>Lista de alumnos</button>
        {mostrarForm && <Form /> }
        {mostrarStudents && <StudentsList alumnos={alumnos} /> }
    </div>
  )
}
