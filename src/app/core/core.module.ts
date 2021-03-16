import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Pipes
import { EnumOptionListPipe } from './pipes/enumOptionListPipe';
import { HumanizePipe } from './pipes/humanizePipe';
import { StringFilterByPipe } from './pipes/stringFilterByPipe';
// Lib
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AvatarModule } from 'ngx-avatar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
//directives
import { TablePaginationComponent } from './directives/table-pagination/table-pagination.component';
// Permission
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // lib
    PerfectScrollbarModule,
    AvatarModule,
    NgbModule,
    NgSelectModule,
    NgxSpinnerModule,
    TreeModule,
    TableModule,
    MultiSelectModule,
    ButtonModule,
    // Permission
    NgxPermissionsModule.forChild(),
  ],
  declarations: [
    // pipes
    EnumOptionListPipe,
    HumanizePipe,
    StringFilterByPipe,
    // directives
    TablePaginationComponent,
  ],
  exports: [
    // lib
    PerfectScrollbarModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    NgxSpinnerModule,
    TreeModule,
    TableModule,
    MultiSelectModule,
    ButtonModule,
    // Permission
    NgxPermissionsModule,

    // pipes
    EnumOptionListPipe,
    HumanizePipe,
    StringFilterByPipe,

    // directives
    TablePaginationComponent,
  ],
  providers: [
  ]
})
export class CoreModule {
}
