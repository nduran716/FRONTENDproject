import { CATEGORIAS } from "./data";

export function formatearFecha(fechaISO: string): string {
  const opciones: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const fecha = new Date(fechaISO + "T00:00:00");
  return fecha.toLocaleDateString("es-CO", opciones);
}

export function etiquetaCategoria(valorCategoria: string): string {
  for (let i = 0; i < CATEGORIAS.length; i++) {
    if (CATEGORIAS[i].valor === valorCategoria) {
      return CATEGORIAS[i].etiqueta;
    }
  }
  return valorCategoria;
}