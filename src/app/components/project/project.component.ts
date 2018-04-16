import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: []
})
export class ProjectComponent {

  project:any = undefined;
  code:string = undefined;

  constructor(
    private route:ActivatedRoute,
    private _ps:ProjectsService
  )
  {
    route.params.subscribe(param => {
      _ps.loadProject(param['id']).subscribe(res => {
        this.code = param['id'];
        this.project = res.json();
      });
    })
  }

}
