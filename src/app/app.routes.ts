import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PutComponent } from './components/task/put/put.component';
import { UpdateComponent } from './pages/update/update.component';
import { AddComponent } from './task/add/add.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'update/:idUser', component: UpdateComponent },{path: 'add',component: AddComponent},
];
