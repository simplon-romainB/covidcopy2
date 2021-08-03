import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadjourComponent } from './deadjour.component';

describe('DeadjourComponent', () => {
  let component: DeadjourComponent;
  let fixture: ComponentFixture<DeadjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadjourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
