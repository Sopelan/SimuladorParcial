import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusPaisesComponent } from './sus-paises.component';

describe('SusPaisesComponent', () => {
  let component: SusPaisesComponent;
  let fixture: ComponentFixture<SusPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SusPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
