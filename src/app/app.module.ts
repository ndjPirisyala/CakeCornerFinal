import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomizationComponentComponent } from './customization-component/customization-component.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CustomizeFrostopComponent } from './customize-frostop/customize-frostop.component';
import {MatGridListModule, MatCardModule} from '@angular/material';
import { MatRadioModule, MatInputModule } from '@angular/material';
import { OrdersComponent } from './orders/orders.component';
import { ActionsComponent } from './actions/actions.component';
import { BirthdayComponent } from './birthdayCakes/birthday.component';
import { AdminDashComponent } from './adminDash/adminDash.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeListComponent } from './cakes/cake-list/cake-list.component';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component';
import { CakeItemComponent } from './cakes/cake-list/cake-item/cake-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CakeStartComponent } from './cakes/cake-start/cake-start.component';
import { CakeEditComponent } from './cakes/cake-edit/cake-edit.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { CakeService } from './cakes/cake.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ReviewsComponent } from './reviews/reviews.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { HomeComponent } from './home/home.component';
import { FeedbackService } from './feedbacks/feedback.service';
import { FeedbackItemComponent } from './feedbacks/feedback-item/feedback-item.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { CollectionsComponent } from './collections/collections.component';
import { HttpModule } from '@angular/http';
import { NgxStripeModule } from 'ngx-stripe';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { LoginComponent } from './login/login.component';

import { UserService } from './user/user.service';
import { HTTP_INTERCEPTORS} from '../../node_modules/@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import {UsermanageService} from './users/usermanage.service';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './user-profile/update-profile/update-profile.component';
import { CustomizeFrostingComponent } from './customize-frosting/customize-frosting.component';
import { CustomizeToppingComponent } from './customize-topping/customize-topping.component';
import { CustomizedCakeViewComponent } from './customized-cake-view/customized-cake-view.component';
import { CustomizationAdminComponent } from './customization-admin/customization-admin.component';
import { CustomizationAdminCakeComponent } from './customization-admin-cake/customization-admin-cake.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomizationComponentComponent,
    CustomizeFrostopComponent,
    OrdersComponent,
    ActionsComponent,
    BirthdayComponent,
    AdminDashComponent,
    CakesComponent,
    CakeListComponent,
    CakeDetailComponent,
    CakeItemComponent,
    DropdownDirective,
    CakeStartComponent,
    CakeEditComponent,
    ReviewsComponent,
    FeedbacksComponent,
    HomeComponent,
    FeedbackItemComponent,
    PaymentComponent,
    CartComponent,
    CollectionsComponent,
    PaymentsuccessComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UpdateProfileComponent,
    CustomizeFrostingComponent,
    CustomizeToppingComponent,
    CustomizedCakeViewComponent,
    CustomizationAdminComponent,
    CustomizationAdminCakeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_lJqo2ImUTmU0oIz3NjK8dPFR00V56Xrxi6'),
    BrowserAnimationsModule,
    NotifierModule.withConfig( {
      // Custom options in here
    } ),
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, CakeService, UserService, UsermanageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
