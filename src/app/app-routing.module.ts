import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';


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

}
,
{
  path:'cart',
  component:CartComponent

},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'registration',
  component:RegistrationComponent
},
{
  path:'search',
  component:SearchComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
