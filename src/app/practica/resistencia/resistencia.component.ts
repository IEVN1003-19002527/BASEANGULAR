import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {

  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  color1: string = '';
  color2: string = '';
  color3: string = '';
  tolerancia: string = '';
  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;
  resultado: boolean = false;

  calcular() {
    const valorColor1 = this.colors.indexOf(this.color1);
    const valorColor2 = this.colors.indexOf(this.color2);
    const multiplicador = Math.pow(10, this.colors.indexOf(this.color3));

    this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
    const toleranceFactor = this.tolerancia === 'oro' ? 0.05 : 0.10;
    this.valorMaximo = this.valor * (1 + toleranceFactor);
    this.valorMinimo = this.valor * (1 - toleranceFactor);
    this.resultado = true;
  }
}
