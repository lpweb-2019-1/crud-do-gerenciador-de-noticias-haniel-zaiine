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
  categoria = [
    { name: "esportes", value: "Esportes" },
    { name: "politica", value: "Politica" },
    { name: "economia", value: "Economia" },
    { name: "tecnologia", value: "Tecnologia" }
  ];
  tags = [
    { name: "tag1", value: "tag1" },
    { name: "tag2", value: "tag2" },
    { name: "tag3", value: "tag3" },
    { name: "tag4", value: "tag4" }
  ];
  editoria = null;

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

  salvar(form){
    const noticia = new Noticia(
      this.noticias.length,
      this.titulo,
      this.conteudo,
      this.data_publicacao,
      this.noticia_publicada,
      this.categoria,
      this.editoria,
      this.tags
    );
    this.noticias.push(noticia);
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
}
