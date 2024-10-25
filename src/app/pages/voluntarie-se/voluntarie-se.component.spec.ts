import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarieSeComponent } from './voluntarie-se.component';

describe('VoluntarieSeComponent', () => {
  let component: VoluntarieSeComponent;
  let fixture: ComponentFixture<VoluntarieSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntarieSeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoluntarieSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
