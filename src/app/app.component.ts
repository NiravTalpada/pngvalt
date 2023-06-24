import { Component } from '@angular/core';
import { Apiservice } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService : Apiservice){
   
  }

 
}
