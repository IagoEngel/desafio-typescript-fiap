import express from 'express';
import { LivroController } from '../controllers/livroController';

const livrosRouter = express.Router();

livrosRouter.get('/livros', LivroController.getLivro);

livrosRouter.post('/livros', LivroController.postLivro);

livrosRouter.put('/livros', LivroController.putLivro);

livrosRouter.delete('/livros', LivroController.deleteLivro);

export default livrosRouter;