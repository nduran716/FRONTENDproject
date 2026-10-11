import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Noticia } from '../../data';
import { obtenerTodasLasNoticias } from '../../storage';
import { etiquetaCategoria } from '../../utils';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  destacadas: Noticia[] = [];

  ngOnInit(): void {
    const todas = obtenerTodasLasNoticias();
    const ordenadas = this.ordenarPorFechaDescendente(todas);
    for (let i = 0; i < ordenadas.length && i < 3; i++) {
      this.destacadas.push(ordenadas[i]);
    }
  }

  ordenarPorFechaDescendente(lista: Noticia[]): Noticia[] {
    const copia = lista.slice();
    copia.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    return copia;
  }

  etiqueta(categoria: string): string {
    return etiquetaCategoria(categoria);
  }
}