import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';

import { AuthModule } from './auth/auth.module';
import { BootstarpFormsComponent } from './common/bootstarp-forms/bootstarp-forms.component';
import { ProductFilterComponent } from './common/product-filter/product-filter.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { CardMenuComponent } from './common/card-menu/card-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './common/product-search/product-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FarmerComponent } from './components/dashboard/components/farmer/farmer.component';
import { BuyerComponent } from './components/dashboard/components/buyer/buyer.component';
import { PostComponent } from './components/dashboard/forms/post/post.component';
import { UpdateComponent } from './components/dashboard/forms/update/update.component';
import { DashboardOverviewComponent } from './components/dashboard/components/dashboard-overview/dashboard-overview.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { ResponsesComponent } from './components/dashboard/components/responses/responses.component';
import { OfferFullDetailsComponent } from './components/dashboard/components/offer-full-details/offer-full-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    BootstarpFormsComponent,
    ProductFilterComponent,
    CarouselComponent,
    CardMenuComponent,
    ProductListComponent,
    ProductSearchComponent,
    FarmerComponent,
    BuyerComponent,
    PostComponent,
    UpdateComponent,
    DashboardOverviewComponent,
    SideNavComponent,
    ResponsesComponent,
    OfferFullDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }