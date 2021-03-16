import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Libs
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { QuillModule } from 'ngx-quill';
// Routing
import { LookupRoutingModule } from './lookup-routing.module';
import { CoreModule } from 'src/app/core/core.module';
// Components
import { AddEditVatComponent } from './vat/add-edit-vat/add-edit-vat.component';
import { VatsComponent } from './vat/vats/vats.component';
import { PackageTypesComponent } from './package-type/package-types/package-types.component';
import { AddEditPackageTypeComponent } from './package-type/add-edit-package-type/add-edit-package-type.component';
import { DiscrepancyStatusesComponent } from './discrepancy-status/discrepancy-statuses/discrepancy-statuses.component';
import { AddEditDiscrepancyStatusComponent } from './discrepancy-status/add-edit-discrepancy-status/add-edit-discrepancy-status.component';
import { LookupsHomeComponent } from './lookups-home/lookups-home.component';
import { AddeditfortestComponent } from './test/AddEditForTest/addeditfortest/addeditfortest.component';
import { MainfortestComponent } from './test/AddEditForTest/main/mainfortest/mainfortest.component';


@NgModule({
  declarations: [

  AddEditVatComponent,

  VatsComponent,

  PackageTypesComponent,

  AddEditPackageTypeComponent,

  DiscrepancyStatusesComponent,

  AddEditDiscrepancyStatusComponent,

  LookupsHomeComponent,

  AddeditfortestComponent,

  MainfortestComponent],
  imports: [
    CoreModule,
    CommonModule,
    LookupRoutingModule,
    NgxDatatableModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'direction': 'rtl' }],
          [{ 'align': [] }],
        ]
      }
    }),
  ],
})
export class LookupModule { }
