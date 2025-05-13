import { Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ProjectViewComponent } from './views/project-view/project-view.component';

export const routes: Routes = [
    {path: '', redirectTo: "portfolio", pathMatch: "full"},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},

    {path: 'portfolio/:name', component: ProjectViewComponent},

    //{ path: '**', component: PageNotFoundComponent }
];
