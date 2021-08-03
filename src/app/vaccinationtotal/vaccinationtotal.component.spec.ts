import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationtotalComponent } from './vaccinationtotal.component';

describe('VaccinationtotalComponent', () => {
  let component: VaccinationtotalComponent;
  let fixture: ComponentFixture<VaccinationtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
