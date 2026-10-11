import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
 
@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./app.html",
  styleUrl: "./app.css"
})
export class App {
  menuAbierto = false;
 
  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }
}