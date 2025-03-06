import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackClearSaveButtonComponent } from './back-clear-save-button.component';

describe('BackClearSaveButtonComponent', () => {
  let component: BackClearSaveButtonComponent;
  let fixture: ComponentFixture<BackClearSaveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackClearSaveButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackClearSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
