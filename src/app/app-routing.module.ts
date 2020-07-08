import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BootstarpFormsComponent } from './common/bootstarp-forms/bootstarp-forms.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FarmerComponent } from './components/dashboard/components/farmer/farmer.component';
import { BuyerComponent } from './components/dashboard/components/buyer/buyer.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { PostComponent } from './components/dashboard/forms/post/post.component';
import { ResponsesComponent } from './components/dashboard/components/responses/responses.component';
import { OfferFullDetailsComponent } from './components/dashboard/components/offer-full-details/offer-full-details.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: 'forms', component: BootstarpFormsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'responses', component: ResponsesComponent },
  { path: 'offer-full-details', component: OfferFullDetailsComponent },
  { path: 'post', component: PostComponent },
  { path: 'home', component: HomeComponent},


  {
    path: 'dashboard', //parent route path
    component: DashboardComponent,  // child route component that the router renders
    children: [
      {
        path: 'farmer', // child route path
        component: FarmerComponent // child route component that the router renders
      },
      {
        path: 'buyer',
        component: BuyerComponent // another child route component that the router renders
      },
      // {
      //   path: 'post',
      //   component: PostComponent // another child route component that the router renders
      // },

      {
        path: '',
        redirectTo: 'farmer',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/products',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: ProductListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
