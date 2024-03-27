import db from "../database/database";

export class LivroEditoraController {
    static async linkLivroEditora(req: any, res: any) {
        const { id_editora, id_livro } = req.body;        

        if (!id_editora || !id_livro) {
            return res.status(400).json('Requisição incorreta!');
        }

        db.run(`INSERT INTO Livros_Editora(id_editora, id_livro) VALUES(${id_editora}, ${id_livro})`, (err) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            return res.status(201).json('Editora do Livro atualizada!');
        });
    }
}