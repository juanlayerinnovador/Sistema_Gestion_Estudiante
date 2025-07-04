import React from 'react'

export const StudetsCard = ({ alumno }) => {
    const [alumnoCard, setAlumnoCard] = React.useState(alumno)
  return (
    <div>
        {alumnoCard.map((alumnoCard) => (
        <div>
        <li key={alumnoCard.id}>...</li>
        <h2>{alumnoCard.nombre}</h2>
        <p>{alumnoCard.edad}</p>
        <p>{alumnoCard.carrera}</p>
        <p>{alumnoCard.promedio}</p>
        <button>Editar</button>
        <button>Eliminar</button>
        </div>
        ))};
        
    </div>
  )
}
