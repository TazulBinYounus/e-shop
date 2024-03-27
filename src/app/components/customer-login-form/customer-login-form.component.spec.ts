import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginFormComponent } from './customer-login-form.component';

describe('CustomerLoginFormComponent', () => {
  let component: CustomerLoginFormComponent;
  let fixture: ComponentFixture<CustomerLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerLoginFormComponent]
    });
    fixture = TestBed.createComponent(CustomerLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
