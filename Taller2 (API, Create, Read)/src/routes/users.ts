import express from 'express';
import { dbInstance } from '../database/db';

const userRouter = express.Router();

// C.R.U.D: Create, Read, Update, Delete //

/* Descripcion: Crear un nuevo usuario
*  Ruta: '/user'
*  Metodo: POST
*  Parametros: name, age, email
*/
userRouter.post('/user', (req, res) => {
    // Obtener los datos del usuario
    const { name, age, email } = req.body;

    // Crear un nuevo usuario
    const newUser = dbInstance.createUser(name, age, email);

    // Enviar una respuesta
    res.json( newUser.toJSON() );
})

/* Descripcion: Obtener un usuario
*  Ruta: '/user/:id'
*  Metodo: GET
*/
userRouter.get('/user/:id', (req, res) => {
    // Obtener el ID del usuario
    const userId = req.params.id;

    // Buscar el usuario en la base de datos
    const user = dbInstance.getUserById(parseInt(userId));

    // Respuesta: Usuario no encontrado
    if (user === undefined) {
        res.status(404).json( {message: 'Usuario no encontrado'} );
        return;
    }

    // Respuesta: Usuario encontrado
    res.json( user.toJSON() );
})

/* Descripcion: Obtener todos los usuarios
*  Ruta: '/users'
*  Metodo: GET
*/
userRouter.get('/users', (req, res) => {
    // Obtener todos los usuarios
    const users = dbInstance.getAllUsers();

    // Enviar una respuesta
    // Por cada usuario, convertirlo a JSON
    res.json( users.map( user => user.toJSON() ) );
})

// -------------------------------------------- // 

// Update (PUT)
userRouter.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json( {message: 'Usuario actualizado'} );
})

// Delete (DELETE)
userRouter.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json( {message: 'Usuario eliminado'} );
})

export default userRouter;