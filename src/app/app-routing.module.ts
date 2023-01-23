import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImagesComponent} from "./components/images/images.component";
import {ImageDetailsComponent} from "./components/image-details/image-details.component";

const routes: Routes = [
  {path: '', component: ImagesComponent},
  {path: 'image/:id', component: ImageDetailsComponent},
  {path: '**', redirectTo: "", component: ImagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
