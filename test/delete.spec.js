import eliminarPost from '../src/components/firestoreDelete';
import { doc, deleteDoc } from '../src/components/firebase/firestore';
import { db } from '../src/components/firebase';

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  deleteDoc: jest.fn(),
}));

describe('eliminarPost', () => {
  it('deberia eliminar un post correctamente', async () => {
    const docID = 'tu-id-de-documento';

    // simular la referencia dle documento y la funcion deleteDoc
    const postRefMock = jest.fn();
    const deleteDocMock = jest.fn().mockResolvedValue();

    // asignar los mocks a las funciones correspondientes
    doc.mockReturnValue(postRefMock);
    deleteDoc.mockReturnValue(deleteDocMock);

    // llama a la funcion eliminarPost
    await eliminarPost(docID);

    // Verifica que se haya mostrado el mensaje de exito
    expect(doc).toHaveBeenCalledWith(db, 'dataBase2', docID);
    expect(deleteDoc).toHaveBeenCalledWith(postRefMock);

    expect(console.log).toHaveBeenCalledWith('Post eliminado correctamente');
  });

  it('deberia manejar errores al eliminar un post', async () => {
    const docID = 'tu-id-de-documento';

    // Simula un error al eliminar el documento
    const deleteDocMock = jest.fn().mockRejectedValue(new Error('Error al eliminar el post'));

    // asigna el mock a la funcion deleteDoc
    deleteDoc.mockReturnValue(deleteDocMock);

    // llamar a la funcion eliminarPost
    await expect(eliminarPost(docID)).rejects.toThrow('Error al eliminar el post');

    // Verificar que se haya mostrado el mensaje de error
    expect(console.error).toHaveBeenCalledWith('Error al eliminar el post:', expect.any(Error));
  });
});
