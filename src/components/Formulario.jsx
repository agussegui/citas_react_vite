import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes,setPacientes,paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  //el uso de useEffect es: Escuchar por los cambios que sucedan en alguna parte del state 
  //se pueden tener muchos useEffect al igual useState
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)

    } 
  }, [paciente])

  const generarId = () => {
    //creo un id unico random es aleatorio con 36 caracteres que es con toString y extraigo los dos primeros caracteres con substring 
    const random = Math.random().toString(36).substring(2); 
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){

      setError(true);
      return;
    } 

    setError(false);

    //es una mala practica definir un state como arreglo y esta escribiendo como un objeto
    //Construir objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }

    if(paciente.id){
      //Editando Registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();

      //los tres puntos son para pasar una copia de pacientes
      //arreglo nuevo y lo ponemos en setPacientes
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>
        
      <form 
        className="bg-white shadow-lg rounded-lg py-10 px-5 " 
        onSubmit={handleSubmit}
      >
        {error && <Error>Todos los campos son obligatorios</Error>}

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota" >
            Nombre Mascota
          </label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario" >
            Nombre Propietario
          </label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email" >
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta" >
            Alta
          </label>
          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas" >
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all "
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />


      </form>
    </div>
  )
}

export default Formulario
