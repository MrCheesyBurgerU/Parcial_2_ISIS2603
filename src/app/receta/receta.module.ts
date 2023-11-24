import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [RecetaListComponent, RecetaDetailComponent],
  exports:[RecetaListComponent, RecetaDetailComponent]
})
export class RecetaModule { }
