import { Component, signal } from '@angular/core';
import { RouteReuseStrategy, RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  collagename="Amal Jyothi"

  person={
    name:'Roy',
    email:'roy@gmail.com',
    contactno:'95336432'
  }
  
  protected readonly title = signal('project3');
}
