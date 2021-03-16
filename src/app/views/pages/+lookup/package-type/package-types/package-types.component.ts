import { Component, Injector, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { PackageTypesController } from 'src/app/core/APIs/PackageTypesController';
import { QueryParamsDto, TableColumn } from 'src/app/core/models/common/SharedModels';
import { BaseService } from 'src/app/core/services/base.service';
import { PackageTypeFilterDto } from 'src/app/core/models/lookups/PackageType';
import { AddEditPackageTypeComponent } from '../add-edit-package-type/add-edit-package-type.component';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-package-types',
  templateUrl: './package-types.component.html',
  styleUrls: ['./package-types.component.scss']
})
export class PackageTypesComponent extends BaseService implements OnInit {

  // Table
  columns: TableColumn<any>[] = [
    { label: 'Name', property: 'name', type: 'text', visible: true },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true },
  ];
  data: any[] = [];
  total: number = 0;
  _selectedColumns: any[];
  filterDto: PackageTypeFilterDto = new PackageTypeFilterDto();

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._selectedColumns = this.columns.filter(x => x.visible);
    this.pageCallback();
  }

  get selectedColumns(): TableColumn<any>[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: TableColumn<any>[]) {
    //restore original order
    this._selectedColumns = this.columns.filter(col => val.includes(col));
  }

  onPageChange(e) {
    console.log(e);

  }
  pageCallback(event: LazyLoadEvent = null) {

    this.filterDto.pageIndex = ((event?.first / event?.rows) || 0) + 1;

    this.showSpinner();

    let params: QueryParamsDto[] = [
      { key: 'pageIndex', value: this.filterDto.pageIndex },
      { key: 'pageSize', value: this.filterDto.pageSize },
      // Filter
      { key: 'name', value: this.filterDto.name },
    ];

    this.httpService.GET(PackageTypesController.SearchPackageTypes, params)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        if (res.isPassed) {
          console.log(res);
          this.data = res.data.list;
          this.total = res.data.total;
          this.spinner.hide();
          this._ref.detectChanges();
        }
      });
  }

  add() {
    const modal = this.modalService.open(AddEditPackageTypeComponent, { size: 'md' });
    modal.result
      .then(res => {
        if (res == 'done') {
          this.pageCallback();
        }
      },
        (reason) => { });
  }

  edit(packageType) {
    const modalRef = this.modalService.open(AddEditPackageTypeComponent, { size: 'lg' });
    modalRef.componentInstance.packageType = packageType;
    modalRef.componentInstance.mode = 'update';

    modalRef.result
      .then(res => {
        if (res == 'done') {
          this.pageCallback();
        }
      },
        (reason) => { });
  }

  delete(packageType) {
    this.sweetAlertService.Delete(PackageTypesController.DeletePackageType(packageType.id))
      .then(x => {
        this.pageCallback();
      });
  }
}

