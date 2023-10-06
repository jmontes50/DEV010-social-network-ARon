

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
