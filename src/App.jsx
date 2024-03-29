import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {
  //Aclaracion LocalStorage solo alamcena strings

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  //se pueden usar varios useEffect, cuando se pasa un arreglo vacio se ejecuta una vez
  //El orden es importante 

  useEffect(() => {
    //con JSON.stringify lo convertis en un string
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      </div>
    </div>
  )
}

export default App
