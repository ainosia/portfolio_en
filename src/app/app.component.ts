import { Component } from '@angular/core';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _ps:ProjectsService) { }
}
