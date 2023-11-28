import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SalaryCalcComponent } from './salary-calc/salary-calc.component';

const routes: Routes = [
  { path: '', component: SalaryCalcComponent }, // Default route, maps to AppComponent
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'salary-calc', component: SalaryCalcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
