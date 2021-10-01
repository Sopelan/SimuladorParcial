import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuActorComponent } from './su-actor.component';

describe('SuActorComponent', () => {
  let component: SuActorComponent;
  let fixture: ComponentFixture<SuActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
