import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto implements OnInit {
  nombre = '';
  correo = '';
  asunto = '';
  mensaje = '';

  nombreInvalido = false;
  correoInvalido = false;
  mensajeInvalido = false;
  mensajeEnviado = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const asuntoURL = params.get('asunto');
      if (asuntoURL) {
        this.asunto = asuntoURL;
      }
    });
  }

  pareceCorreoValido(texto: string): boolean {
    const posicionArroba = texto.indexOf('@');
    const posicionUltimoPunto = texto.lastIndexOf('.');
    const tieneEspacios = texto.indexOf(' ') !== -1;

    const hayAlgoAntesDeLaArroba = posicionArroba > 0;
    const hayArroba = posicionArroba !== -1;
    const elPuntoVieneDespuesDeLaArroba = posicionUltimoPunto > posicionArroba + 1;
    const hayAlgoDespuesDelPunto = posicionUltimoPunto < texto.length - 1;

    return hayArroba && hayAlgoAntesDeLaArroba && elPuntoVieneDespuesDeLaArroba && hayAlgoDespuesDelPunto && !tieneEspacios;
  }

  onInputChange(): void {
    this.mensajeEnviado = false;
  }

  onSubmit(): void {
    this.mensajeEnviado = false;

    this.nombreInvalido = this.nombre.trim() === '';
    this.correoInvalido = !this.pareceCorreoValido(this.correo.trim());
    this.mensajeInvalido = this.mensaje.trim() === '';

    if (this.nombreInvalido || this.correoInvalido || this.mensajeInvalido) {
      return;
    }

    this.mensajeEnviado = true;
    this.nombre = '';
    this.correo = '';
    this.asunto = '';
    this.mensaje = '';
  }
}