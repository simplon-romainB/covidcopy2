import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasjourComponent } from './casjour.component';

describe('CasjourComponent', () => {
  let component: CasjourComponent;
  let fixture: ComponentFixture<CasjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasjourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
