import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
// Components
import { VatsComponent } from './vat/vats/vats.component';
import { PackageTypesComponent } from './package-type/package-types/package-types.component';
import { DiscrepancyStatusesComponent } from './discrepancy-status/discrepancy-statuses/discrepancy-statuses.component';
import { LookupsHomeComponent } from './lookups-home/lookups-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: LookupsHomeComponent,
    // canActivate: [NgxPermissionsGuard],
    // data: { permissions: { only: ['SuperAdmin'], redirectTo: '/dashboard' } },
  },
  {
    path: 'vats',
    component: VatsComponent,
    // canActivate: [NgxPermissionsGuard],
    // data: { permissions: { only: ['SuperAdmin'], redirectTo: '/dashboard' } },
  },
  {
    path: 'package-types',
    component: PackageTypesComponent,
    // canActivate: [NgxPermissionsGuard],
    // data: { permissions: { only: ['SuperAdmin'], redirectTo: '/dashboard' } },
  },
  {
    path: 'discrepancy-status',
    component: DiscrepancyStatusesComponent,
    // canActivate: [NgxPermissionsGuard],
    // data: { permissions: { only: ['SuperAdmin'], redirectTo: '/dashboard' } },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookupRoutingModule { }

class amira{
  
}
