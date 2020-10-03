import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [

{
  path:'product-info',
  component:ProductInfoComponent 
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'wishlist',
  component:WishlistComponent
},
{
  path:'profile',
  component:ProfileComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
