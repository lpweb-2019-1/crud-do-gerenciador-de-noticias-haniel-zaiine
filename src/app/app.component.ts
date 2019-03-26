import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  noticias = [];
  titulo = null;
  conteudo = null;
  data_publicacao = null;
  noticia_publicada = null;
  categoria = null;
  tags = null;
  editoria = null;
  editar = null;

  ngOnInit(){
    this.noticias.push(new Noticia(
      this.noticias.length,
      'Teste',
      'Conteudo da notícia',
      new Date(),
      'Sim',
      'Categoria da noticia',
      'Editoria da noticia',
      'tags',
    ));
  }

  salvar() {
    if (this.editar) {
      this.editar.titulo = this.titulo;
      this.editar.conteudo = this.conteudo;
      this.editar.data_publicacao = this.data_publicacao;
      this.editar.noticia_publicada = this.noticia_publicada;
      this.editar.categoria = this.categoria;
      this.editar.tags = this.tags;
      this.editar.editoria = this.editoria
    } else {
      const noticia = new Noticia(
        this.noticias.length,
        this.titulo,
        this.conteudo,
        this.data_publicacao,
        this.noticia_publicada,
        this.categoria,
        this.editoria,
        this.tags
      )
      this.noticias.push(noticia);
    };

    this.titulo = null;
    this.conteudo = null;
    this.data_publicacao = null;
    this.noticia_publicada = null;
    this.categoria = null;
    this.tags = null;
    this.editoria = null;
  }

  mostrar(noticia){
    noticia.visivel = true;
  }
  
  fechar(noticia){
    noticia.visivel = false;
  }

  excluir(noticia) {
    if (confirm(`Tem certeza que deseja excluir a notícia: ${noticia.titulo} ?`)) {
      this.noticias.splice(this.noticias.findIndex(n => n.id === noticia.id), 1);
    }
  }


  editarNoticia(noticia) {
    this.editar = noticia;
    this.titulo = noticia.titulo;
    this.conteudo = noticia.conteudo;
    this.data_publicacao = noticia.data_publicacao;
    this.noticia_publicada = noticia.noticia_publicada;
    this.categoria = noticia.categoria;
    this.tags = noticia.tags;
    this.editoria = noticia.editoria
}

}