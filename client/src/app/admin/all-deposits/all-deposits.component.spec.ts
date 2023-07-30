import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepositsComponent } from './all-deposits.component';

describe('AllDepositsComponent', () => {
  let component: AllDepositsComponent;
  let fixture: ComponentFixture<AllDepositsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDepositsComponent]
    });
    fixture = TestBed.createComponent(AllDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
