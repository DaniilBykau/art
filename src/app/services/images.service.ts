import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IImages} from "../models/images";

@Injectable({
  providedIn: 'root'
})

export class ImagesService {
  url: string = '/assets/db.json';

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<IImages[]>(this.url);
  }
}
