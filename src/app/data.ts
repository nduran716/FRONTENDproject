export interface Noticia {
  id: number;
  categoria: string;
  titulo: string;
  descripcionBreve: string;
  contenido: string;
  imagen: string;
  fecha: string;
}
 
export interface Categoria {
  valor: string;
  etiqueta: string;
}
 
export const NOTICIAS_BASE: Noticia[] = [
  {
    id: 1,
    categoria: "tecnologia",
    titulo: "Avances en energias renovables en la region",
    descripcionBreve: "Asi avanza Colombia hacia la energia nuclear.",
    contenido:
      "La region ha dado pasos importantes hacia la transicion energetica, con nuevos proyectos solares y eolicos que buscan reducir la dependencia de combustibles fosiles.",
    imagen: "assets/img/Energia.png",
    fecha: "2026-09-12"
  },
  {
    id: 4,
    categoria: "comercial",
    titulo: "Expo Huila Tech 2026",
    descripcionBreve: "La feria empresarial, de innovacion y tecnologia mas importante del sur de Colombia.",
    contenido:
      "Durante tres dias, el Recinto Ferial La Voragine en Neiva reunira a expositores de tecnologia, comercio y educacion.",
    imagen: "assets/img/expohuila.jpg",
    fecha: "2026-09-13"
  },
  {
    id: 5,
    categoria: "educativa",
    titulo: "El SENA ofrece cursos gratuitos de Microsoft Office",
    descripcionBreve: "Inscripciones abiertas para jovenes de la comunidad.",
    contenido:
      "El SENA anuncio una nueva oferta de formacion virtual y gratuita en herramientas ofimaticas, dirigida a jovenes y adultos que buscan mejorar sus competencias digitales.",
    imagen: "assets/img/SENA.png",
    fecha: "2026-09-05"
  },
  {
    id: 6,
    categoria: "turismo",
    titulo: "HuilaLand: descubre el futuro de la diversion",
    descripcionBreve: "Un nuevo parque tematico familiar abre sus puertas en Garzon.",
    contenido:
      "HuilaLand combina atracciones mecanicas, zonas interactivas y espacios educativos pensados para toda la familia.",
    imagen: "assets/img/HuilaLand.png",
    fecha: "2026-09-01"
  },
  {
    id: 7,
    categoria: "comercial",
    titulo: "Feria Internacional Industrial de Bogota",
    descripcionBreve: "Mas de 50 expositores locales este fin de semana.",
    contenido:
      "Del 28 de septiembre al 2 de octubre, la feria reunira a las principales industrias del pais interesadas en ampliar su red de contactos comerciales.",
    imagen: "assets/img/Feria.png",
    fecha: "2026-09-11"
  },
  {
    id: 8,
    categoria: "comercial",
    titulo: "Llegada de Frontier Airlines",
    descripcionBreve: "La aerolinea operara nuevas rutas desde Orlando hacia Bogota, Medellin y Cartagena.",
    contenido:
      "A partir de diciembre, los viajeros colombianos contaran con nuevas opciones de vuelo directo hacia Estados Unidos gracias a la llegada de esta aerolinea de bajo costo.",
    imagen: "assets/img/fRONTIER.png",
    fecha: "2026-09-09"
  }
];
 
export const CATEGORIAS: Categoria[] = [
  { valor: "educativa", etiqueta: "Educativas" },
  { valor: "tecnologia", etiqueta: "Tecnologicas" },
  { valor: "turismo", etiqueta: "Turisticas" },
  { valor: "comercial", etiqueta: "Comerciales" }
];