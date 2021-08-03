import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadtotalComponent } from './deadtotal.component';

describe('DeadtotalComponent', () => {
  let component: DeadtotalComponent;
  let fixture: ComponentFixture<DeadtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
