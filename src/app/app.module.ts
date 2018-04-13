import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ProjectsComponent,
    ProjectComponent,
    FooterComponent,
    SkillsComponent,
    AboutComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
