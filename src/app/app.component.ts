import { Component } from '@angular/core';

@Component({ 
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'baseAngular';

    pelicula = { 
        nombre: 'Super Man',
        fechaLanzamiento: new Date(),
        precio: 123.65
    }

    duplicarNumero(valor: number): number {
        return valor * 2;
    }
}