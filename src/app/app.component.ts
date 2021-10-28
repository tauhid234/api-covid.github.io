import { Component, OnInit } from '@angular/core';
import { DataCovidService } from './services/data-covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-covid';

  data : any = [];
  constructor(private dataCovidServices : DataCovidService){
    
  }

  ngOnInit(){
    this.dataKu();
  }

  async dataKu(){

    let output = await this.dataCovidServices.getDataIndonesia("https://covid19.mathdro.id/api").toPromise();
    this.data.push(output);
    console.log(this.data);
  }
}
