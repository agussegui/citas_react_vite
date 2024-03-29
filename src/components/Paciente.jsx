const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className=" text-lg font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
          <span className="font-normal normal-case text-xl">{nombre}</span>
        </p>

        <p className=" text-lg font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
          <span className="font-normal normal-case text-xl">{propietario}</span>
        </p>

        <p className=" text-lg font-bold mb-3 text-gray-700 uppercase">Email:{' '}
          <span className="font-normal normal-case text-xl">{email}</span>
        </p>

        <p className=" text-lg font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{' '}
          <span className="font-normal normal-case text-xl">{fecha}</span>
        </p>

        <p className=" text-lg font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
          <span className="font-normal normal-case text-xl">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white uppercase font-bold rounded-lg transition-all" 
            type="button"
            onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg transition-all"
            type="button"
            onClick={handleEliminar}
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente


