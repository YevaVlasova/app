import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { SideComponent } from './side/side.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
];

@NgModule({
  declarations: [
    ProfileComponent,
    PersonComponent,
    SideComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
