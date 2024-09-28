import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent implements OnInit {
  // Lista de colores disponibles
  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  
  // Mapa de códigos de color
  colorCodes: { [key: string]: string } = {
    'Negro': 'black',
    'Café': '#8B4513',
    'Rojo': 'red',
    'Naranja': 'orange',
    'Amarillo': 'yellow',
    'Verde': 'green',
    'Azul': 'blue',
    'Violeta': 'violet',
    'Gris': 'gray',
    'Blanco': 'white'
  };

  // Formulario de resistencia
  resistenciaForm: FormGroup = new FormGroup({});
  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;
  resultado: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializa el formulario con validaciones
    this.resistenciaForm = this.fb.group({
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerancia: ['', Validators.required]
    });
  }

  // Calcula el valor de la resistencia basado en los colores seleccionados
  calcular() {
    const valorColor1 = this.colors.indexOf(this.resistenciaForm.value.color1);
    const valorColor2 = this.colors.indexOf(this.resistenciaForm.value.color2);
    const multiplicador = Math.pow(10, this.colors.indexOf(this.resistenciaForm.value.color3));

    this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
    const toleranceFactor = this.resistenciaForm.value.tolerancia === 'oro' ? 0.05 : 0.10;
    this.valorMaximo = this.valor * (1 + toleranceFactor);
    this.valorMinimo = this.valor * (1 - toleranceFactor);
    this.resultado = true;
  }
  
  // Devuelve el código de color basado en el nombre del color seleccionado
  getColorCode(color: string): string {
    return this.colorCodes[color] || 'transparent';
  }

  // Devuelve el color de fondo para la tolerancia
  getToleranceColor(): string {
    if (this.resistenciaForm.value.tolerancia === 'oro') {
      return 'gold';
    } else if (this.resistenciaForm.value.tolerancia === 'plata') {
      return 'silver';
    }
    return 'transparent';
  }
}