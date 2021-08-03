import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationjourComponent } from './vaccinationjour.component';

describe('VaccinationjourComponent', () => {
  let component: VaccinationjourComponent;
  let fixture: ComponentFixture<VaccinationjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationjourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
