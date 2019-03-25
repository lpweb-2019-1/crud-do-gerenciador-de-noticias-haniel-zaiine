export class Noticia {
    id: number
    titulo: string;
    conteudo: string;
    data_publicacao: Date;
    noticia_publicada: string;
    categoria: string;
    tags: string;
    editoria: string;

    constructor(id: number, titulo: string, conteudo: string, data_publicacao: Date, noticia_publicada: string, categoria: string, editoria: string, tags: string) {
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.data_publicacao = data_publicacao;
        this.noticia_publicada = noticia_publicada;
        this.categoria = categoria;
        this.editoria = editoria;
        this.tags = tags
        if (data_publicacao) {
            if (typeof data_publicacao === 'string') {
                this.data_publicacao = new Date(data_publicacao);
            } else {
                this.data_publicacao = data_publicacao;
            }
        } else {
            this.data_publicacao = null;
        }
    }
}
