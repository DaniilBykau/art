import { Component } from '@angular/core';
import ImagesJson from 'db.json';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  constructor(){
    console.log(this.images);
  }
  images: any = ImagesJson;
  displayedColumns: string[] = ['image'];

  public ngOnInit(): void {

  }
}
