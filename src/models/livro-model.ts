interface ILivro {
    id_livro: number;
    titulo: string;
    autor: string;
    isbn: number;
    ano_publicacao: number;
}

export class Livro implements ILivro {
    id_livro!: number;
    titulo!: string;
    autor!: string;
    isbn!: number;
    ano_publicacao!: number;
}