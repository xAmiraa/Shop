import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfortestComponent } from './mainfortest.component';

describe('MainfortestComponent', () => {
  let component: MainfortestComponent;
  let fixture: ComponentFixture<MainfortestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainfortestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainfortestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
