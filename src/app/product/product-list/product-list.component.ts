import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title="saludo de variable";

  imageWidth:number=50;
  imageMargin:number=2;
  mostrarImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.mostrarImg=!this.mostrarImg;
  }

  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "Year":"2022",
      "Precio": 20000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "ImagenURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nissan_Sentra_2020.jpg/800px-Nissan_Sentra_2020.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "Year":"2023",
      "Precio": 30000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Audi_A4_B9_2016.jpg/800px-Audi_A4_B9_2016.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas familiar",
      "Year":"2022",
      "Precio": 60000,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kia_Rio_2017.jpg/800px-Kia_Rio_2017.jpg"
    }
  ]
}
