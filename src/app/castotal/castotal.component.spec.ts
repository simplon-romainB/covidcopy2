import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastotalComponent } from './castotal.component';

describe('CastotalComponent', () => {
  let component: CastotalComponent;
  let fixture: ComponentFixture<CastotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
