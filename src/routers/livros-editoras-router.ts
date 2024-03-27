import express from 'express';
import { LivroEditoraController } from '../controllers/livroEditoraController';

const livrosEditorasRouter = express.Router();

livrosEditorasRouter.post('/livro-editora', LivroEditoraController.linkLivroEditora);

export default livrosEditorasRouter;