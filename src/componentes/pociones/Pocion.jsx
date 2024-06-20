const Pocion = ({ pocion, completarPocion, eliminarPocion, editarPocion }) => {
//Destucturacion
  const { id, nombre, completada } = pocion;
  
  const completar = () => {
    completarPocion(id);
};
const eliminar = () => {
  eliminarPocion(id);
};
const editar = () => {
  editarPocion(id);
}


  return (
    <div className="pocion"> 
      
      <span className={completada ? 'completada' : ''}>{nombre}</span>
      <button onClick={completar}>
        {completada ? 'pendiente' : 'Completar'}
      </button>
      <button onClick={eliminar}>Eliminar</button>
      <button onClick={editar}>Editar</button>
      </div>
  );
};

export default Pocion;

