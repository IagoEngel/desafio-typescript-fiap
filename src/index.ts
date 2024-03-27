import express from 'express';
import cors from 'cors';
import livrosRouter from './routers/livros-router';
import editorasRouter from './routers/editoras-router';

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/api', express.json(), livrosRouter, editorasRouter);

app.use((req, res) => {
    res.status(404);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});