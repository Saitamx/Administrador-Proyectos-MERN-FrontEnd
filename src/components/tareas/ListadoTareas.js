import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  // extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const {proyecto, eliminarProyecto} = proyectosContext;

  // obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const {tareasproyecto} = tareasContext; 

  // Si no hay proyecto seleccionado
  if(!proyecto) return <h2>Selecciona un proyecto</h2>

  // array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // Elimina un proyecto
  const onclickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  }

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 
        ? (<li className="tarea"><p>No hay Tareas</p></li>
        ) : tareasproyecto.map(tarea => (
          <Tarea 
            key={tarea.id} 
            tarea={tarea} />
            ))
        }
      </ul>      
      <button 
        type="button"
        className="btn btn-eliminar"
        onClick={onclickEliminar}
      >Eliminar Proyecto &times;</button>
    </>
  );
};

export default ListadoTareas;
