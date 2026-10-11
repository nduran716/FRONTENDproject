import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Noticia } from '../../data';
import { obtenerTodasLasNoticias, obtenerFavoritos, obtenerNoticiaPorId, eliminarNoticia, esFavorito } from '../../storage';
import { etiquetaCategoria } from '../../utils';

@Component({
  selector: 'app-listado',
  imports: [CommonModule, RouterLink],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class Listado implements OnInit {
  noticias: Noticia[] = [];
  modoSoloFavoritos = false;
  tituloListado = 'Noticias';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.modoSoloFavoritos = params.get('favoritos') === '1';
      this.tituloListado = this.modoSoloFavoritos ? 'Mis favoritos' : 'Noticias';
      this.cargarNoticias();
    });
  }

  cargarNoticias(): void {
    const todas = obtenerTodasLasNoticias();

    if (!this.modoSoloFavoritos) {
      this.noticias = todas;
      return;
    }

    const favoritos = obtenerFavoritos();
    const soloFavoritas: Noticia[] = [];
    for (let i = 0; i < todas.length; i++) {
      if (this.listaContiene(favoritos, todas[i].id)) {
        soloFavoritas.push(todas[i]);
      }
    }
    this.noticias = soloFavoritas;
  }

  listaContiene(lista: number[], valor: number): boolean {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === valor) return true;
    }
    return false;
  }

  esFavorita(id: number): boolean {
    return esFavorito(id);
  }

  etiqueta(categoria: string): string {
    return etiquetaCategoria(categoria);
  }

  manejarEliminar(id: number): void {
    const noticia = obtenerNoticiaPorId(id);
    if (!noticia) return;

    const confirmado = window.confirm(`¿Seguro que deseas eliminar la noticia "${noticia.titulo}"?`);
    if (confirmado) {
      eliminarNoticia(id);
      this.cargarNoticias();
    }
  }
}
