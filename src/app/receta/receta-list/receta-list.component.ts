import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas: Array<Receta> = [];
  total: number = 0;
  suma: number = 0;
  promedio: string = "";
  selected: boolean = false;
  selectedReceta!: Receta;

  
  constructor(private recetaService: RecetaService) { }

  getRecetas(): void{
    this.recetaService.getRecetas().subscribe(recetas => {this.recetas =recetas;})
  }

  getPromedio(): void{
    this.recetas.forEach(receta =>{
      this.total = this.total+1;
      console.log(receta.estrellas)
      this.suma = this.suma + receta.estrellas;
    })

    this.promedio = (this.suma/this.total).toFixed(2);
  }
  ngOnInit() {

    this.getRecetas();
  }

  onSelected(receta: Receta): void {
    this.selected = true;
    this.selectedReceta = receta;
  }

}
