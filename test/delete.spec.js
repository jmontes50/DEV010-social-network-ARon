import { doc, deleteDoc } from 'firebase/firestore';
import eliminarPost from '../src/components/firestoreDelete';
import { db } from '../src/components/firebase';

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  deleteDoc: jest.fn().mockImplementation(() => Promise.resolve()),
  getFirestore: jest.fn(),

}));

describe('eliminarPost', () => {
  it('deberia eliminar un post correctamente', async () => {
    const docID = 'tu-id-de-documento';

    // aca simulamos el callback
    const callbackMock = jest.fn();

    // simular la referencia del documento y la funcion deleteDoc
    const postRefMock = jest.fn();
    const deleteDocMock = jest.fn().mockResolvedValue();

    // asignar los mocks a las funciones correspondientes
    doc.mockReturnValue(postRefMock);
    // deleteDoc.mockReturnValue(deleteDocMock);

    // llama a la funcion eliminarPost
    await eliminarPost(docID, callbackMock);

    // Verifica que se haya mostrado el mensaje de éxito en el callback
    expect(callbackMock).toHaveBeenCalledWith('Post eliminado correctamente');
    expect(deleteDoc).toHaveBeenCalledWith(postRefMock);
  });

  it('deberia manejar errores al eliminar un post', async () => {
    const docID = 'tu-id-de-documento';
    // aca ponemos la simulacion del callback
    const callbackMock = jest.fn();
    // Simula un error al eliminar el documento
    const error = new Error('Error al eliminar el post');
    const deleteDocMock = jest.fn().mockRejectedValue(error);
    const postRefMock = doc(db, 'dataBase2', docID);

    // Asigna el mock a la función doc
    doc.mockReturnValue(postRefMock);

    // simular la funcion deleteDoc para lanzar un error
    deleteDoc.mockImplementation(deleteDocMock);

    // llamar a la funcion eliminarPost y maneja la promesa rechazada
    await expect(eliminarPost(docID, callbackMock)).rejects.toThrowError(
      `Error al eliminar el post`
    );

    // Verificar que se haya mostrado el mensaje de error
    expect(deleteDoc).toHaveBeenCalledWith(doc(db, 'dataBase2', docID));
  });
});
