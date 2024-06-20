import { useState, useEffect } from "react";
import ListaDePociones from "./ListaDePociones";
import FormularioDePociones from "./FormularioDePociones";

const GestionPociones = () =>{
  const [pociones, setPociones] = useState([]);
  const [pocionEditando, setPocionEditando] = useState(null);

  // Carga inicial de las pociones desde localStorage al montar el componente
  useEffect(() => {
    const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
    if (pocionesGuardadas) {
      setPociones(pocionesGuardadas);
    }
  }, []);

  // Guarda las pociones en localStorage cada vez que cambia el estado de pociones
  useEffect(() => {
    localStorage.setItem('pociones', JSON.stringify(pociones))
  }, [pociones]);


  //Marcar una poción como completada o no completada
  const completarPocion = (id) => {
    const nuevasPociones = pociones.map((pocion) =>
    pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
    );
    setPociones(nuevasPociones);
};

// Eliminar una poción 
const eliminarPocion = (id) => {
  const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
  setPociones(nuevasPociones);
};

  // Función para agregar una nueva poción a la lista
  const agregarPocion = (nombre) => {
    if (pocionEditando) {
      const nuevasPociones = pociones.map((pocion) =>
        pocion.id === pocionEditando.id ? { ...pocion, nombre } : pocion
      );
      setPociones(nuevasPociones);
      setPocionEditando(null);
    } else {
      const nuevaPocion = {
        id: Date.now(),
        nombre,
        completada: false,
      };
      setPociones([...pociones, nuevaPocion]);
    }
  };
// Editar pocion
const editarPocion = (id) => {
  const pocion = pociones.find((p) => p.id === id);
    setPocionEditando(pocion);
};

  return(
    <div className="contenedor-pociones">
      <h1 className="titulo"> Gestión de Pociones en Hogwarts</h1> 
      {/* Componente ListaDePociones que muestra todas las pociones */}
      <ListaDePociones 
      pociones={pociones}
      completarPocion={completarPocion}
      eliminarPocion={eliminarPocion}
      editarPocion={editarPocion}
      />
      {/* Componente FormularioDePociones para agregar nuevas pociones */}
      <FormularioDePociones agregarPocion={agregarPocion} pocionEditando={pocionEditando} />
    </div>
  )
}

export default GestionPociones;
