import express from 'express';
import { EditoraController } from '../controllers/editoraController';

const editorasRouter = express.Router();

editorasRouter.get('/editoras', EditoraController.getEditora);

editorasRouter.post('/editoras', EditoraController.postEditora);

editorasRouter.put('/editoras', EditoraController.putEditora);

editorasRouter.delete('/editoras', EditoraController.deleteEditora);

export default editorasRouter;