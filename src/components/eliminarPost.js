import eliminarPost from './firestoreDelete';

const comentarioIdAEliminar = 'id_del_comentario_a_eliminar';

eliminarPost(comentarioIdAEliminar)
  .then(() => {
    console.log('Comentario eliminado con éxito.');
  })
  .catch((error) => {
    console.error('Error al eliminar el comentario:', error.message);
  });

export default comentarioIdAEliminar;
