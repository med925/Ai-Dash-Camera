import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OfferComponent } from './offer/offer.component';
import { IntegratorComponent } from './integrator/integrator.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { TaxiComponent } from './taxi/taxi.component';
import { SchoolBusComponent } from './school-bus/school-bus.component';
import { PublicBusComponent } from './public-bus/public-bus.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { CompanyComponent } from './company/company.component';
import { InsurerComponent } from './insurer/insurer.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { titleKey: 'PAGE_TITLES.HOME', descriptionKey: 'PAGE_DESCRIPTIONS.HOME' } },
  { path: 'contact', component: ContactComponent, data: { titleKey: 'PAGE_TITLES.CONTACT', descriptionKey: 'PAGE_DESCRIPTIONS.CONTACT' } },
  { path: 'services', component: ServicesComponent, data: { titleKey: 'PAGE_TITLES.SERVICES', descriptionKey: 'PAGE_DESCRIPTIONS.SERVICES' } },
  { path: 'solutions', component: SolutionsComponent, data: { titleKey: 'PAGE_TITLES.SOLUTIONS', descriptionKey: 'PAGE_DESCRIPTIONS.SOLUTIONS' } },
  { path: 'about-us', component: AboutUsComponent, data: { titleKey: 'PAGE_TITLES.ABOUT_US', descriptionKey: 'PAGE_DESCRIPTIONS.ABOUT_US' } },
  { path: 'offer', component: OfferComponent, data: { titleKey: 'PAGE_TITLES.OFFER', descriptionKey: 'PAGE_DESCRIPTIONS.OFFER' } },
  { path: 'integrator', component: IntegratorComponent, data: { titleKey: 'PAGE_TITLES.INTEGRATOR', descriptionKey: 'PAGE_DESCRIPTIONS.INTEGRATOR' } },
  { path: 'products', component: ProductsComponent, data: { titleKey: 'PAGE_TITLES.PRODUCTS', descriptionKey: 'PAGE_DESCRIPTIONS.PRODUCTS' } },
  { path: 'logistics', component: LogisticsComponent, data: { titleKey: 'PAGE_TITLES.LOGISTICS', descriptionKey: 'PAGE_DESCRIPTIONS.LOGISTICS' } },
  { path: 'oil-gas', component: OilGasComponent, data: { titleKey: 'PAGE_TITLES.OIL_GAS', descriptionKey: 'PAGE_DESCRIPTIONS.OIL_GAS' } },
  { path: 'taxi', component: TaxiComponent, data: { titleKey: 'PAGE_TITLES.TAXI', descriptionKey: 'PAGE_DESCRIPTIONS.TAXI' } },
  { path: 'school-bus', component: SchoolBusComponent, data: { titleKey: 'PAGE_TITLES.SCHOOL_BUS', descriptionKey: 'PAGE_DESCRIPTIONS.SCHOOL_BUS' } },
  { path: 'public-bus', component: PublicBusComponent, data: { titleKey: 'PAGE_TITLES.PUBLIC_BUS', descriptionKey: 'PAGE_DESCRIPTIONS.PUBLIC_BUS' } },
  { path: 'car-rental', component: CarRentalComponent, data: { titleKey: 'PAGE_TITLES.CAR_RENTAL', descriptionKey: 'PAGE_DESCRIPTIONS.CAR_RENTAL' } },
  { path: 'compliance', component: ComplianceComponent, data: { titleKey: 'PAGE_TITLES.COMPLIANCE', descriptionKey: 'PAGE_DESCRIPTIONS.COMPLIANCE' } },
  { path: 'company', component: CompanyComponent, data: { titleKey: 'PAGE_TITLES.COMPANY', descriptionKey: 'PAGE_DESCRIPTIONS.COMPANY' } },
  { path: 'insurer', component: InsurerComponent, data: { titleKey: 'PAGE_TITLES.INSURER', descriptionKey: 'PAGE_DESCRIPTIONS.INSURER' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', 
      anchorScrolling: 'enabled', 
      scrollOffset: [0, 80] 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
