import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavBarComponent],
})
export class TopNavBarModule {}
