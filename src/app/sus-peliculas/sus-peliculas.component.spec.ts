import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusPeliculasComponent } from './sus-peliculas.component';

describe('SusPeliculasComponent', () => {
  let component: SusPeliculasComponent;
  let fixture: ComponentFixture<SusPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SusPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
