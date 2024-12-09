import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EpisodesComponent } from './episodes/episodes.component';

export const routes: Routes = [
{
    path: "",
    component: LoginComponent
},
{
    path: "characters",
    component: CharactersComponent
},
{
    path: "dashboard",
    component: DashboardComponent
},
{
    path: "episodes",
    component: EpisodesComponent
}
];
