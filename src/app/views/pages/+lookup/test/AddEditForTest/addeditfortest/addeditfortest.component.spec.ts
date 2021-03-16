import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditfortestComponent } from './addeditfortest.component';

describe('AddeditfortestComponent', () => {
  let component: AddeditfortestComponent;
  let fixture: ComponentFixture<AddeditfortestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditfortestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditfortestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
