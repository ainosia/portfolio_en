import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProjectsService {

  projects:Array<any> = [];
  loading:boolean = true;

  constructor(private http:Http) {
    this.loadProjects()
  }

  public loadProjects() {
    this.loading = true;
    this.http.get('https://porfolioangularidiomas.firebaseio.com/en_projects_idx.json')
    .subscribe(res => {
      this.loading = false;
      this.projects = res.json();
    });
  }

  public loadProject(code:string) {
    return this.http.get(`https://porfolioangularidiomas.firebaseio.com/en_projects/${ code }.json`);
  }
}
