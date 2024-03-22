import express from 'express';
import userRouter from './routes/users';

// Pendiente: CORS
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

app.use('', userRouter);

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`)
});