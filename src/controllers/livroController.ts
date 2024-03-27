import db from "../database/database";

export class LivroController {
    static async getLivro(req: any, res: any) {
        const { id_livro } = req.body;

        let whereCondition = '';
        if (id_livro) {
            whereCondition = `WHERE id_livro = ${id_livro}`;
        }

        db.all(`SELECT li.*, ed.* FROM Livro as li
        LEFT JOIN Livros_Editora as led ON led.id_livro = li.id_livro
        LEFT JOIN Editora as ed ON ed.id_editora = led.id_editora ${whereCondition}`, (err, rows) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            if (rows.length === 0) {
                return res.status(200).json('Nenhum livro com este código');
            }

            return res.status(200).send(rows);
        });
    }

    static async postLivro(req: any, res: any) {
        const { titulo, autor, isbn, ano_publicacao } = req.body;

        if (!titulo && !autor || !isbn || !ano_publicacao) {
            return res.status(400).json('Requisição incorreta!');
        }

        db.run('INSERT INTO Livro(titulo, autor, isbn, ano_publicacao) VALUES (?,?,?,?)', [titulo, autor, isbn, ano_publicacao], (err) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            return res.status(201).json('Livro cadastrado!');
        });
    }

    static async putLivro(req: any, res: any) {
        const { id_livro, titulo, autor, isbn, ano_publicacao } = req.body;

        if (!id_livro || !titulo && !autor && !isbn && !ano_publicacao) {
            return res.status(400).json('Requisição incorreta!');
        }

        let updateCondition = '';
        let updateParams = <any>[];

        if (titulo) {
            updateCondition = 'titulo = ?' + (autor ? ', ' : '');
            updateParams.push(titulo);
        }

        if (autor) {
            updateCondition = 'autor = ?' + (isbn ? ', ' : '');
            updateParams.push(autor);
        }

        if (isbn) {
            updateCondition = 'isbn = ?' + (ano_publicacao ? ', ' : '');
            updateParams.push(isbn);
        }

        if (ano_publicacao) {
            updateCondition = 'ano_publicacao = ?';
            updateParams.push(ano_publicacao);
        }

        let sql = `UPDATE Livro SET ${updateCondition} WHERE id_livro = ${id_livro}`;

        db.run(sql, [...updateParams], (err) => {
            if (err) {
                console.log(err.message);

                return res.status(400).json('Um erro inesperado ocorreu.');
            }

            return res.status(200).json('Livro atualizado!');
        });
    }

    static async deleteLivro(req: any, res: any) {
        const { id_livro } = req.body;

        if (!id_livro) {
            return res.status(400).json('Requisição incorreta!');
        }

        db.run(`DELETE FROM Livro WHERE id_livro = ${id_livro}`, (err) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            return res.status(200).json('Livro excluído!');
        });
    }
};