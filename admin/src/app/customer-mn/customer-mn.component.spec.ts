import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMnComponent } from './customer-mn.component';

describe('CustomerMnComponent', () => {
  let component: CustomerMnComponent;
  let fixture: ComponentFixture<CustomerMnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerMnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
