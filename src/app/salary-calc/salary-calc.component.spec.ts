import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCalcComponent } from './salary-calc.component';

describe('SalaryCalcComponent', () => {
  let component: SalaryCalcComponent;
  let fixture: ComponentFixture<SalaryCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
