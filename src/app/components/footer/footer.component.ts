import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  year:number = new Date().getFullYear();
  name:string = "Sonia Villa";
  email:string = "ainosia@gmail.com";

  ngOnInit() {
  }

}
