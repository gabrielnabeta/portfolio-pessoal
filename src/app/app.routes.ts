import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'menu', title: 'Menu', component:MenuComponent},
    {path: 'home', title: 'Home', component:HomeComponent},
    {path: 'footer', title: 'Footer', component:FooterComponent}
];
