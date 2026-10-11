import { NOTICIAS_BASE, Noticia } from "./data";
 
const CLAVE_FAVORITOS = "newnews_favoritos";
const CLAVE_ELIMINADAS = "newnews_noticias_eliminadas";
 
function leerLista(clave: string): number[] {
  const textoGuardado = localStorage.getItem(clave);
 
  if (textoGuardado === null) {
    return [];
  }
 
  return JSON.parse(textoGuardado);
}
 
function guardarLista(clave: string, lista: number[]): void {
  const textoParaGuardar = JSON.stringify(lista);
  localStorage.setItem(clave, textoParaGuardar);
}
 
function listaContiene(lista: number[], valorBuscado: number): boolean {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valorBuscado) {
      return true;
    }
  }
  return false;
}
 
/* ===================== FAVORITOS ===================== */
 
export function obtenerFavoritos(): number[] {
  return leerLista(CLAVE_FAVORITOS);
}
 
export function esFavorito(idNoticia: number): boolean {
  const favoritos = obtenerFavoritos();
  return listaContiene(favoritos, idNoticia);
}
 
export function alternarFavorito(idNoticia: number): boolean {
  const favoritos = obtenerFavoritos();
 
  if (esFavorito(idNoticia)) {
    const nuevaLista: number[] = [];
    for (let i = 0; i < favoritos.length; i++) {
      if (favoritos[i] !== idNoticia) {
        nuevaLista.push(favoritos[i]);
      }
    }
    guardarLista(CLAVE_FAVORITOS, nuevaLista);
    return false;
  } else {
    favoritos.push(idNoticia);
    guardarLista(CLAVE_FAVORITOS, favoritos);
    return true;
  }
}
 
/* ===================== ELIMINAR NOTICIAS ===================== */
 
export function obtenerNoticiasEliminadas(): number[] {
  return leerLista(CLAVE_ELIMINADAS);
}
 
export function eliminarNoticia(idNoticia: number): void {
  const eliminadas = obtenerNoticiasEliminadas();
  eliminadas.push(idNoticia);
  guardarLista(CLAVE_ELIMINADAS, eliminadas);
}
 
/* ===================== ACCESO A LAS NOTICIAS ===================== */
 
export function obtenerTodasLasNoticias(): Noticia[] {
  const eliminadas = obtenerNoticiasEliminadas();
  const resultado: Noticia[] = [];
 
  for (let i = 0; i < NOTICIAS_BASE.length; i++) {
    const noticia = NOTICIAS_BASE[i];
    const fueEliminada = listaContiene(eliminadas, noticia.id);
    if (!fueEliminada) {
      resultado.push(noticia);
    }
  }
 
  return resultado;
}
 
export function obtenerNoticiaPorId(idNoticia: number): Noticia | undefined {
  const todas = obtenerTodasLasNoticias();
 
  for (let i = 0; i < todas.length; i++) {
    if (todas[i].id === idNoticia) {
      return todas[i];
    }
  }
 
  return undefined;
}