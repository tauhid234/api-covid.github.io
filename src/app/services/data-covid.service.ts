import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCovidService {

  constructor(private http : HttpClient) { }

  getDataIndonesia(url : any){
    return this.http.get(url);
  }
}
