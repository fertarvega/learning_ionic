import { Component } from '@angular/core';
import { ApiconsumerService } from '../services/apiconsumer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private apiconsumer: ApiconsumerService) {}
  
  CallApi(){
    this.apiconsumer.test().subscribe((response) => {
      let localresponse;
      localresponse = response;
    });
  }

}
