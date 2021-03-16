import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { PackageTypesController } from 'src/app/core/APIs/PackageTypesController';
import { CreateUpdatePackageTypeDto } from 'src/app/core/models/lookups/PackageType';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-add-edit-package-type',
  templateUrl: './add-edit-package-type.component.html',
  styleUrls: ['./add-edit-package-type.component.scss']
})
export class AddEditPackageTypeComponent extends BaseService implements OnInit {

  @Input('packageType') packageType;
  @Input('mode') mode: 'create' | 'update' = 'create';
  form: FormGroup;

  constructor(public injector: Injector, private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    super(injector);
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });

    if (this.mode == 'update') {
      this.setFormData();
    }

  }
  setFormData() {
    this.form.controls['name'].patchValue(this.packageType?.name);
    this.form.controls['description'].patchValue(this.packageType?.description);
    this._ref.detectChanges();
  }


  save() {
    const controls = this.form.controls;
    /** check form */
    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    if (this.mode === 'create') {
      this.createObject();
    } else if (this.mode === 'update') {
      this.updateObject();
    }

  }


  createObject() {
    this.showSpinner();

    let body: CreateUpdatePackageTypeDto = this.form.value;

    this.httpService.POST(PackageTypesController.CreatePackageType, body)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        if (res.isPassed) {
          this.spinner.hide();
          // this.alertService.success('Package type is created successfully');
          this.activeModal.close('done');
        } else {
          console.log(`Error: ${res.message}`);
          this.spinner.hide();
        }
      });
  }


  updateObject() {
    this.showSpinner();

    let body: CreateUpdatePackageTypeDto = this.form.value;

    this.httpService.PUT(PackageTypesController.UpdatePackageType(this.packageType.id), body)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        if (res.isPassed) {
          this.spinner.hide();
          // this.alertService.success('Package type is updated successfully');
          this.activeModal.close('done');
        } else {
          console.log(`Error: ${res.message}`);
          this.spinner.hide();
        }
      });
  }
}
