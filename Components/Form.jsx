import React from 'react'

export const Form = () => {
    const [datos, setdatos] = React.useState({
        nombre:'', edad:'', carrera:'', promedio:''
    })
    const {nombre, edad, carrera, promedio} = datos
    const enviardatos = () => {
        e.preventDefault()
        setdatos({
            nombre: target.nombre.value,
            edad: target.edad.value,
            carrera: target.carrera.value,
            promedio: target.promedio.value
        })
    }
  return (
    <div>
        <h1>Insertar alumno</h1>
    <form onSubmit={enviardatos}>
        <label>Nombre</label><br></br>
        <input type="text" value={nombre} onChange={enviardatos} required/><br></br>
        <label>Edad</label><br></br>
        <input type="number" value={edad} onChange={enviardatos} required/><br></br>
        <label>Carrera</label><br></br>
        <input type="text" value={carrera} onChange={enviardatos} required/><br></br>
        <label>Promedio</label><br></br>
        <input type="number" value={promedio} onChange={enviardatos} required/><br></br><br></br>
        <button type="submit">Guardar</button>
    </form>
    </div>
  )
}
