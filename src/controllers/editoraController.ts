import db from "../database/database";

export class EditoraController {
    static async getEditora(req: any, res: any) {
        const { id_editora } = req.body;

        let whereCondition = '';
        if (id_editora) {
            whereCondition = `WHERE id_editora = ${id_editora}`;
        }

        db.all(`SELECT * FROM Editora ${whereCondition}`, (err, rows) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            if (rows.length === 0) {
                return res.status(200).json('Nenhuma editora com este código');
            }

            return res.status(200).send(rows);
        });
    }

    static async postEditora(req: any, res: any) {
        const { nome } = req.body;

        if (!nome) {
            return res.status(400).json('Requisição incorreta!');
        }

        db.run(`INSERT INTO Editora(nome) VALUES (?)`, nome, (err) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            return res.status(201).json('Editora criada!');
        });

    }

    static async putEditora(req: any, res: any) {
        const { id_editora, nome } = req.body;

        if (!id_editora || !nome) {
            return res.status(400).json('Requisição incorreta!');
        }

        db.run(`UPDATE Editora SET nome = ? WHERE id_editora = ${id_editora}`, nome, (err) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            return res.status(201).json('Editora atualizada!');
        });
    }

    static async deleteEditora(req: any, res: any) {
        const { id_editora } = req.body;
        
        if (!id_editora) {
            return res.status(400).json('Requisição incorreta!');
        }

        db.run(`DELETE FROM Editora WHERE id_editora = ${id_editora}`, (err) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json('Um erro inesperado ocorreu');
            }

            return res.status(200).json('Editora excluída!');
        });
    }
};