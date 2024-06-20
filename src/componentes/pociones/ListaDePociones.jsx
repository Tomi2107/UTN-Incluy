import Pocion from "./Pocion";

const ListaDePociones = ({ pociones, completarPocion, eliminarPocion, editarPocion}) =>{
  return(
    <div>
      <h2> Invetario de Pociones </h2>
      {pociones.map((pocion) => (
        <Pocion 
        key={pocion.id}
        pocion={pocion}
        completarPocion={completarPocion}
        eliminarPocion={eliminarPocion}
        editarPocion={editarPocion}
        />
      ))}
    </div>
  )
}
export default ListaDePociones;