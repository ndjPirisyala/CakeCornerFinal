import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayComponent } from './birthdayCakes/birthday.component';
import { ActionsComponent } from './actions/actions.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminDashComponent } from './adminDash/adminDash.component';
import { Action } from '../../node_modules/rxjs/internal/scheduler/Action';
import { CakesComponent } from './cakes/cakes.component';
import { CakeStartComponent } from './cakes/cake-start/cake-start.component';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component';
import { CakeEditComponent } from './cakes/cake-edit/cake-edit.component';
import { HomeComponent } from './home/home.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { CollectionsComponent } from './collections/collections.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './user-profile/update-profile/update-profile.component';
import { CustomizeFrostopComponent } from './customize-frostop/customize-frostop.component';
import { CustomizationComponentComponent } from './customization-component/customization-component.component';
import { CustomizedCakeViewComponent } from './customized-cake-view/customized-cake-view.component';


const routes: Routes = [

  {path: 'customization', component: CustomizationComponentComponent,
        children: [
          { path: 'customize-frostop', component: CustomizeFrostopComponent,
            data: { size: 'selectedSize', shape: 'selectedShape', flavour: 'selectedFlavour' },
          children: [
            {path: 'customized-cake-view', component: CustomizedCakeViewComponent}
          ]}
      ]
    },
  {path: 'payments/paymentsuccess', component: PaymentsuccessComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'home', component: HomeComponent},
   { path: 'gallery', component: BirthdayComponent},
   { path: 'adminDash', component: AdminDashComponent, children:[
    {path: 'feedbacks', component: FeedbacksComponent},
     {path: '', redirectTo: '/adminDash/cakes', pathMatch: 'full'},
     {path: 'cakes', component: CakesComponent, children: [
       {path: '', component: CakeStartComponent},
       {path: 'new', component: CakeEditComponent},
       {path: ':id', component: CakeDetailComponent},
       {path: ':id/edit', component: CakeEditComponent},
     ]}
   ]},
   { path: 'orders', component: OrdersComponent},
   {
    path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
