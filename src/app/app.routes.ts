import { Routes } from "@angular/router";
import { Home } from "./components/home/home";
import { Listado } from "./components/listado/listado";
import { Detalle } from "./components/detalle/detalle";
import { Contacto } from "./components/contacto/contacto";

export const routes: Routes = [
  { path: "", component: Home },
  { path: "listado", component: Listado },
  { path: "detalle/:id", component: Detalle },
  { path: "contacto", component: Contacto }
];