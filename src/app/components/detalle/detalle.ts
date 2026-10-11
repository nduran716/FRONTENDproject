import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Noticia } from '../../data';
import { obtenerNoticiaPorId, esFavorito, alternarFavorito } from '../../storage';
import { etiquetaCategoria, formatearFecha } from '../../utils';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {
  noticia: Noticia | undefined;
  id = 0;
  esFav = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.noticia = obtenerNoticiaPorId(this.id);
      this.esFav = esFavorito(this.id);
    });
  }

  etiqueta(categoria: string): string {
    return etiquetaCategoria(categoria);
  }

  fecha(fechaISO: string): string {
    return formatearFecha(fechaISO);
  }

  manejarClickFavorito(): void {
    alternarFavorito(this.id);
    this.esFav = esFavorito(this.id);
  }

  asuntoContacto(): string {
    return this.noticia ? 'Sobre: ' + this.noticia.titulo : '';
  }
}