interface IEditora {
    id_editora: number;
    nome: string;
}

export class Editora implements IEditora {
    id_editora!: number;
    nome!: string;
}